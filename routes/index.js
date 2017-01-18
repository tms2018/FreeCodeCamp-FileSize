var express = require('express');
var router = express.Router();



// get home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'File Upload Service', description: 'This is a file size microservice created for FreeCodecamp' });
});

// upload file and return the size
router.post('/get-file-size', function(req, res) {
  if(!req.file) {
    res.status(500).json({error: "no file uploaded"});
  }

  res.status(200).json({size:req.file.size});
});

module.exports = router;
