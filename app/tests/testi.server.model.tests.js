var app = require('../../server'),
  request = require('supertest'),
  should = require('should'),
  mdlTesti = require('../models/testi.server.model.js');



describe('Testi Model Unit Test', function(){

  it('Dovrebbe contenere un array di 3 elementi',function(done){
    should.exist(mdlTesti);
    should.exist(mdlTesti.testiArray);
    mdlTesti.testiArray.should.be.with.lengthOf(3);
    done();
  });
 


});

