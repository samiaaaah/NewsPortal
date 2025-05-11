const express = require('express');
const router = express.Router();

const {
    getAllCategories,
    createCategory,
    getCategoryById,
    deleteCategory,
    updateCategory,
} = require('../controllers/categoryController');

router.get('/', getAllCategories);          
router.post('/create', createCategory);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);
module.exports = router;