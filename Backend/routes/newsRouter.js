const express = require('express'); 
const router = express.Router();
const upload = require('../middleware/multer');
const  {
    getAllNews,
    createNews,
    getNewsById,
    deleteNews,
    updateNews,
} = require('../controllers/newsContoller');

router.get('/', getAllNews);
router.post('/create',upload.single("image"), createNews);
router.get('/:id', getNewsById);
router.put('/:id', updateNews);
router.delete('/:id', deleteNews);

module.exports = router;