const express = require('express');
const router = express.Router();
const multer = require('multer');
const {analyzizData } = require('../controller/analyzeController');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/analyze', upload.single('csvData'), analyzizData);

module.exports = router;