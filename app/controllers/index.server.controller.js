exports.render = function(req, res) {
  res.render('index', {
    title: 'Hello World JADE',
    testo1: 'Dimmi perchè piangi',
    testo2: 'Di felicità'
  })
};
