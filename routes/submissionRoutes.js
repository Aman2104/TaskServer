const express = require('express');
const submissionController = require('../controllers/submissionController');
const { redisMiddleware } = require('../middlewares/redisMiddleware');
const router = express.Router();

router.post('/submit', submissionController.submit);
router.get('/submissions',redisMiddleware, submissionController.getAllSubmissions);

module.exports = router;
