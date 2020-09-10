var expect  = require('chai').expect;
var request = require('request');
let chai = require('chai');
var constants = require('./constants/const.js')
var baseUrl = "http://localhost:3250/";
var should = chai.should();


// login
describe('LOGIN', function() {
  // with right credentials
  it('Login with correct credentials', function(done) {
    var postConfig = {
      url:`${baseUrl}auth/login`,
      form: constants.user[0]
    };
    request.post(postConfig , function(error, response, body) {
      body = JSON.parse(body)
      expect(body.success).to.equal(true);
      expect(body.message).to.equal("Successfully login");
      expect(body).should.be.a('object');
      done();
    });
  });

  // with wrong credentials
  it('Login with incorrect credentials', function(done) {
    var postConfig = {
      url:`${baseUrl}auth/login`,
      form: constants.user[1]
    };
    request.post(postConfig , function(error, response, body) {
      body = JSON.parse(body)
      expect(body.success).to.equal(false);
      expect(body.message).to.equal("User not present");
      done();
    });
  });
});


// get category data

describe('GET CATEGORY DATA ', function() {
  // with right credentials
  it('Api to get category data for filter', function(done) {
    var getConfig = {
      url:`${baseUrl}getFilterData`,
      form:{}
    };
    request.get(getConfig , function(error, response, body) {
      body = JSON.parse(body)
      expect(body.success).to.equal(true);
      expect(body.filters).to.be.an('array')
      body.filters[0].should.have.property('category_id');
      body.filters[0].should.have.property('category_title');
      done();
    });
  });
});


// get agency data

describe('GET AGENCY DATA ', function() {
  // with right credentials
  it('Api to get agency data', function(done) {
    var getConfig = {
      url:`${baseUrl}getAgencyData`,
      form:{}
    };
    request.get(getConfig , function(error, response, body) {
      body = JSON.parse(body)
      expect(body.success).to.equal(true);
      expect(body.agency).to.be.an('array')
      body.agency[0].should.have.property('agency_id');
      body.agency[0].should.have.property('agency_name');
      body.agency[0].should.have.property('agency_logo_path');
      done();
    });
  });
});




// get agency data

describe('GET NEWS DATA ', function() {
  // with right credentials
  it('Api to get news data', function(done) {
    var getConfig = {
      url:`${baseUrl}getNewsData`,
      form:{}
    };
    request.get(getConfig , function(error, response, body) {
      body = JSON.parse(body)
      expect(body.success).to.equal(true);
      expect(body.news).to.be.an('array')
      body.news[0].should.have.property('news_id');
      body.news[0].should.have.property('news_title');
      body.news[0].should.have.property('news_link');
      done();
    });
  });
});


// get count data

describe('GET NEWS COUNT DATA ', function() {
  // with right credentials
  it('Api to get news count data', function(done) {
    var getConfig = {
      url:`${baseUrl}getCountData`,
      form:constants.news[0]
    };
    request.post(getConfig , function(error, response, body) {
      body = JSON.parse(body)
      expect(body.success).to.equal(true);
      expect(body.count).to.be.an('array')
      body.count[0].should.have.property('news_title');
      body.count[0].should.have.property('click_count');
      body.count[0].should.have.property('agency_name');
      done();
    });
  });

  // with wrong credentials
  it('Api to get newscount data', function(done) {
    var getConfig = {
      url:`${baseUrl}getCountData`,
      form:constants.news[1]
    };
    request.post(getConfig , function(error, response, body) {
      body = JSON.parse(body)
      expect(body.success).to.equal(false);
      expect(body.message).to.equal("SOMETHING WENT WRONG");
      expect(body).should.be.a('object');
      done();
    });
  });
});
