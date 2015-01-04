var persistente = ['Hello World JADE','Dimmi perchè piangi','Di Felicità'];

exports.getTesto = function() {

  return persistente;
  
};

exports.render = function(req, res) {

  var index = require('../controllers/index.server.controller');
  var testo = index.getTesto();

  res.render('index', {
    title: testo[0],
    testo1: testo[1],
    testo2: testo[2]
  })
};

exports.setMyText = function(req,res,next,myText){
  console.log('Passo di qua');
  console.log(myText);
  persistente[1] = myText;
  next();
};
