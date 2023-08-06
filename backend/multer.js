const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split('.')[0];
    cb(null, filename + '-' + uniqueSuffix + '.png');
  },
});

exports.upload = multer({
  storage: storage,
  limits: {
    // Set your desired field size limit (in bytes)
    fieldSize: 1024 * 1024 * 10, // 10 MB limit as an example
  },
});
