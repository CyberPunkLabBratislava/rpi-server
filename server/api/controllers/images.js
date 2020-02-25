var sImages = require('../services/images');
var Log = require('../../classes/logger');

exports.getById = function (req, res, next) {
  sImages.getById(req)
  .then((response)=>{
    res.end(response);
    })
  .catch(()=>{res.send('Something went wrong, please check the logs for more info.')});  
};

exports.post = function (req, res, next) {
  var logger = new Log();
  logger.debug(JSON.stringify(req.headers))
  res.send("GOOD");
  // sImages.saveImage(req)
  // .then((response)=>{res.json({error: false, id: response.id})})
  // .catch(()=>{res.json({error: true, message: 'Something went wrong, please check the logs for more info.'}) });  
};
