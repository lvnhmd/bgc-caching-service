/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const HttpStatus = require('http-status-codes');

const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../index');

const should = chai.should();

chai.use(chaiHttp);

const entry = {
  key: 'Elmer Fudd',
  value: {
    quote: 'Be vewy vewy quiet',
    img: 'elmer.jpg',
  },
};

describe('Test api endpoints', () => {
  describe('POST /entry', () => {
    it('it should create entry ', (done) => {
      chai
        .request(server)
        .post('/entry')
        .send(entry)
        .end((err, res) => {
          res.should.have.property('statusCode').eql(HttpStatus.CREATED);
          done();
        });
    });
  });
});
