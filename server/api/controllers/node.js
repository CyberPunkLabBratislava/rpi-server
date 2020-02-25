var sNode = require('../services/node');

exports.getInfo = function (req, res, next) {
  sNode.getInfo(req)
  .then((response)=>{res.json({error: false, id: response.id})})
  .catch(()=>{res.json({error: true, message: 'Something went wrong, please check the logs for more info.'}) });  
};

exports.getSubnet = function (req, res, next) {
  sNode.getSubnet(req)
  .then((response)=>{res.json({error: false, message: response})})
  .catch(()=>{res.json({error: true, message: 'Something went wrong, please check the logs for more info.'}) });  
};
