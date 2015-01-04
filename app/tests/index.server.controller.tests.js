var app = require('../../server'),
  request = require('supertest'),
  should = require('should');
  index = require('../controllers/index.server.controller');

myNext = function(){
  console.log('myNext OK!');
}

describe('Index Controller Unit Test', function(){

  describe('Test del metodo getTesto()',function(){

    it('Dovrebbe restituire un array di 3 testi',function(done){
      var testi = index.getTesto();
      testi.should.be.with.lengthOf(3);
      done();
    });
 
  });

  describe('Test del metodo setMyText()',function(){

    it('Dovrebbe restituire un array di 3 testi',function(done){
      var testi = index.getTesto();
      testi.should.be.with.lengthOf(3);
      done();
    });

    it('Lancio il metodo e il getTesto dovrebbe fornire elemento[1] = "PIPPO"',function(done){
      var testi = index.getTesto();
      testi.should.be.with.lengthOf(3);
      index.setMyText(null,null,myNext,'PIPPO');
      testi = index.getTesto();
      testi[1].should.be.eql('PIPPO');
      done();
    });

 
  });


});

