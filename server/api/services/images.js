// Imports
var fs = require('fs');
var Log = require('../../classes/logger');
var ai_module = require('../../util/ai');
var config = require('../../configuration/configuration');

// Public functions

exports.saveImage = function (req, type) {
  var logger = new Log();
  var userIP = req.socket.remoteAddress;
  var size = req.headers['content-length'];
  var mimeType = req.headers['content-type'];
  var timestamp = new Date().getTime();
  var imagePath = config.uploadPath + timestamp + '.jpeg';
  var f = fs.createWriteStream(imagePath);
  var img_data = [];
  return new Promise(function(resolve, reject) {
    req.on('data', function (chunk) {
        img_data.push(chunk)
        f.write(chunk);
    });
    req.on('end', function () {
      f.end();
      var img = Buffer.concat(img_data);
      //*** Call AI module */
      ai_module.classify(img)
      .then(function(response){
        logger.info("Image stored by : " + userIP, "POST_IMAGE");
        resolve({id: response._id})
      })
      .catch(function(err){
        logger.error(err, 'POST_IMAGE');
        reject();
      });
    });
  });
}

exports.getById = function (req){
  var id = req.params.id;
  var logger = new Log();
  return new Promise(function(resolve, reject) {
    resolve("Downloading picture with id: " + id);
  });
}