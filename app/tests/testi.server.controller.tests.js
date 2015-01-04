var app = require('../../server'),
  request = require('supertest'),
  should = require('should'),
  mdlTesti = require('../models/testi.server.model.js'),
  ctrlTesti = require('../controllers/testi.server.controller.js');

describe('Testi Controller Unit Test', function(){

  describe('Test GetTesti()', function(){

    it('Dovrebbe contenere un array di 3 elementi',function(done){

      var testi = ctrlTesti.getTesti();
      testi.should.be.with.lengthOf(3);
      done();
    });
 
  });

  describe('Test SetTesto()', function(){

    it('Dovrebbe contenere avere element[1] = PIPPO',function(done){
      var testi = ctrlTesti.getTesti();
      console.log('Prima: ' + JSON.stringify(testi));
      testi[1].should.be.not.equal('PLUTO');
      ctrlTesti.setTesto('PLUTO');
      console.log('Dopo: ' + JSON.stringify(testi));
      testi[1].should.be.equal('PLUTO');
      done();
    });
 
  });
 


});
