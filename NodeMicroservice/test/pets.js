const expect = require('chai').expect;
const http = require('http');

before(function(done){
  require(process.cwd() + '/server/server');
  setTimeout(done, 5000); // Waiting 5 seconds for server to start
  this.timeout(10000);
});

describe('Testing /api/pets',function(){
    it('Testing GET for /pets route',function(done){
      let responseString = '';

       const options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/api/pets'
       };

       const callback = function(response){
         response.on('data', function (chunk) {
         responseString += chunk;
       });

       response.on('end', function () {
         expect(responseString).to.equal('{}');
         done();

       });
      };

      http.request(options, callback).end();
    });
  });
    it('Testing GET for /pets route',function(done){
      let responseString = '';

       const options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/api/pets'
       };

       const callback = function(response){
         response.on('data', function (chunk) {
         responseString += chunk;
       });

       response.on('end', function () {
         expect(responseString).to.equal('{}');
         done();

       });
      };

      http.request(options, callback).end();
    });
  });
describe('Testing /api/pets/:id',function(){
    it('Testing GET for /pets/:id route',function(done){
      let responseString = '';

       const options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/api/pets/:id'
       };

       const callback = function(response){
         response.on('data', function (chunk) {
         responseString += chunk;
       });

       response.on('end', function () {
         expect(responseString).to.equal('{}');
         done();

       });
      };

      http.request(options, callback).end();
    });
  });
    it('Testing GET for /pets/:id route',function(done){
      let responseString = '';

       const options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/api/pets/:id'
       };

       const callback = function(response){
         response.on('data', function (chunk) {
         responseString += chunk;
       });

       response.on('end', function () {
         expect(responseString).to.equal('{}');
         done();

       });
      };

      http.request(options, callback).end();
    });
  });

