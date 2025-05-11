const express = require('express');
const router = express.Router();
const Category = require('../models/categoryModel.js');

async function getAllCategories(req, res) {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function createCategory(req, res) {   
    try{
        const {name}=req.body;
        const categoryData = {
            name,
        };
        const category = await Category.create(categoryData);
        res.status(201).json(category);
    }
    catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function getCategoryById(req, res) {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) return res.status(404).json({ error: "Category not found" });
        res.json(category);
    } catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
async function updateCategory(req, res) {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) return res.status(404).json({ error: "Category not found" });
        const { name } = req.body;
        category.name = name;
        await category.save();
        res.json(category);
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
async function deleteCategory(req, res) {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) return res.status(404).json({ error: "Category not found" });
        await category.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
 module.exports = { 
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
};