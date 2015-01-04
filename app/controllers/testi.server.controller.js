var mdlTesti = require('../models/testi.server.model.js');

exports.getTesti = function(){

  return mdlTesti.testiArray;

};

exports.setTesto = function(testo)
{
  mdlTesti.testiArray[1] = testo;
};
