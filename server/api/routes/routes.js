var express = require('express'),
router = express.Router(),
images = require('../controllers/images'),
node = require('../controllers/node');

// respond with "hello world" when a GET request is made to the homepage
module.exports = router
  .get('', function(req, res){
    res.send('Welcome to rapsberry server');
  })
  .post('/image', images.post)
  .get('/image/:id', images.getById)
  .get('/node', node.getInfo)
  .get('/node/subnet', node.getSubnet)

