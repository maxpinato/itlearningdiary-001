var app = require('../../server'),
  request = require('supertest'),
  should = require('should'),
  ctrlIndex = require('../controllers/index.server.controller');
  ctrlTesti = require('../controllers/testi.server.controller');
  
myNext = function(){
  console.log('myNext OK!');
}

describe('Index Controller Unit Test', function(){

  describe('Test del metodo setMyText()',function(){
  
    it('Lancio il metodo e il getTesto dovrebbe fornire elemento[1] = "PIPPO"',function(done){
      var testi = ctrlTesti.getTesti();
      testi.should.be.with.lengthOf(3);
      ctrlIndex.setMyText(null,null,myNext,'PIPPO');
      testi = ctrlTesti.getTesti();
      testi[1].should.be.eql('PIPPO');
      done();
    });

 
  });


});

