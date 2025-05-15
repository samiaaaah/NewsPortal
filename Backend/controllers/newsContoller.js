const express= require('express');
const router= express.Router();
const News =require('../models/newsModel.js');
const Category = require('../models/categoryModel.js');


// Get all news
async function getAllNews (req, res) {
    try {
        const news = await News.findAll();
        res.status(200).json(news);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
} 

const getNewsCounts = async (req, res) => {
    try {
      const total = await News.count();
  
      const categories = await Category.findAll();
      const countsByCategory = {};
  
      for (let category of categories) {
        const count = await News.count({ where: { categoryId: category.id } });
        countsByCategory[category.name.toLowerCase()] = count; // ensure name is lowercase
      }
  
      res.json({
        success: true,
        total,
        ...countsByCategory,
      });
    } catch (error) {
      console.error('Error getting news count:', error);
      res.status(500).json({ success: false, message: 'Failed to get news count' });
    }
  };
  



//create news
async function createNews(req, res) {
    try {
        const { title, publisherName, description, categoryId, publishedAt } = req.body;

        const newsData = {
            title,
            publisherName,
            description,
            image: req.file ? req.file.filename : null,
            categoryId,
            publishedAt: publishedAt || Date.now(),
        };

        const news = await News.create(newsData);
        res.status(201).json(news);
    } catch (error) {
        console.error('Error creating news:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


// Get news by ID   
async function getNewsById(req, res) {
    try {
        const news = await News.findByPk(req.params.id);
        if (!news) return res.status(404).json({ error: "News not found" });
        res.json(news);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}



//delete news
async function deleteNews(req, res){
    try {
        const news = await News.findByPk(req.params.id);
        if (!news) return res.status(404).json({ error: "News not found" });

        await news.destroy();
        res.json({ message: "News deleted successfully" });
    } catch (error) {
        console.error('Error deleting news:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// update news
async function updateNews(req, res){
    try {
        const { title, publisherName, description, categoryId, publishedAt } = req.body;
        const newsId = req.params.id;

        const news = await News.findByPk(newsId);
        if (!news) return res.status(404).json({ error: "News not found" });

        news.title = title;
        news.publisherName = publisherName;
        news.description = description;
        news.categoryId = categoryId;
        news.publishedAt = publishedAt || Date.now();
        if (req.file) {
            news.image = req.file.filename;
        }

        await news.save();
        res.json(news);
    } catch (error) {
        console.error('Error updating news:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    getAllNews,
    createNews,
    getNewsById,
    deleteNews,
    updateNews,
    getNewsCounts,
}