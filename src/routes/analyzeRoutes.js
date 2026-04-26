const express = require('express');
const router = express.Router();
const multer = require('multer');
const {analyzizData } = require('../controller/analyzeController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

router.post('/analyze', upload.single('csvData'), analyzizData);

module.exports = router;