const Category = require('../models/categoryModel.js');

async function getAllCategories(req, res) {
    try {
        const categories = await Category.findAll();
        res.status(200).json({categories});
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function createCategory(req, res) {   
    try {
        console.log('Request body:', req.body);       
        const { name } = req.body;
       
        if (!name || name.trim() === '') {
          return res.status(400).json({ message: 'Category name is required' });
        }
    
        const newCategory = await Category.create({ name }); // Or your DB call
        res.status(200).json({ category: newCategory });
      } catch (error) {
        console.error('Error in /category/create:', error);
        res.status(500).json({ message: 'Internal Server Error' });
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
//get count category 
async function getCategoryCount(req, res) {
    try {
        const count = await Category.count();
        res.json({ success: true, count });
    } catch (error) {
        console.error('Error getting category count:', error);
        res.status(500).json({ success: false, message: 'Failed to get category count' });
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
    deleteCategory,
    getCategoryCount,
};
