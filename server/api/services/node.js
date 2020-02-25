var Log = require('../../classes/logger');
var find = require('local-devices');

exports.getInfo = function (req){
    var logger = new Log();
    return new Promise(function(resolve, reject) {
      logger.debug("Getting info from node");  
      resolve("Under construction");
    });
  }

   
// Find all local network devices.
  exports.getSubnet = function (req){
    return new Promise(function(resolve, reject) {
      find().then(devices => {
        resolve(devices);
      }) 
    });
  }