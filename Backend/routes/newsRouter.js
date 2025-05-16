const express = require('express'); 
const router = express.Router();
const upload = require('../middleware/multer');
const  {
    getAllNews,
    createNews,
    getNewsById,
    deleteNews,
    updateNews,
    getNewsCounts
} = require('../controllers/newsContoller');

router.get('/', getAllNews);
router.post('/',upload.single("image"), createNews);

router.get('/count', getNewsCounts);
router.get('/:id', getNewsById);
router.put('/:id',upload.single("image"), updateNews);
router.delete('/:id', deleteNews);


module.exports = router;