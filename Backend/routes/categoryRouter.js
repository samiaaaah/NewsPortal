const express = require('express');
const router = express.Router();

const {
    getAllCategories,
    createCategory,
    getCategoryById,
    deleteCategory,
    updateCategory,
    getCategoryCount,
} = require('../controllers/categoryController');

router.get('/', getAllCategories);          
router.post('/', createCategory);

router.get('/count', getCategoryCount);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;