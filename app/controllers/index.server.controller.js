var ctrlTesti = require('../controllers/testi.server.controller.js');

exports.render = function(req, res) {

  var testo = ctrlTesti.getTesti();

  res.render('index', {
    title: testo[0],
    testo1: testo[1],
    testo2: testo[2]
  })
};

exports.setMyText = function(req,res,next,myText){
  ctrlTesti.setTesto(myText);
  next();
};
