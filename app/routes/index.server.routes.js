module.exports = function(app) {
  var index = require('../controllers/index.server.controller');
  app.get('/', index.render);
  app.get('/miotesto/:myText',index.render);

  app.param('myText',index.setMyText);

};
