const biasCalculator = require('../utilis/biasCalculator');
const csv = require('csv-parser');
const stream = require('stream');

const analyzizData = async (req, res) => {
  try {
    let data = [];

    // ✅ Handle file upload (BUFFER BASED - works on Render)
    if (req.file) {
      const bufferStream = new stream.PassThrough();
      bufferStream.end(req.file.buffer);

      await new Promise((resolve, reject) => {
        bufferStream
          .pipe(csv())
          .on('data', (row) => data.push(row))
          .on('end', resolve)
          .on('error', reject);
      });
    }

    // ✅ Handle JSON data
    else if (req.body.data) {
      data = req.body.data;
    }

    // ❌ No input
    else {
      return res.status(400).json({
        success: false,
        message: "No data provided"
      });
    }

    // ✅ Optional: check empty CSV
    if (!data.length) {
      return res.status(400).json({
        success: false,
        message: "CSV is empty or invalid"
      });
    }

    const result = await biasCalculator(data);

    return res.json({
      success: true,
      data,
      result,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = { analyzizData };