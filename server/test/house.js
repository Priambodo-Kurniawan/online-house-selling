'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

var should = chai.should();

const server = require('../app');
const House = require('../models/house');

describe('House API test', () => {

  afterEach(done => {
    House.remove({}, (err) => {
      done();
    })
  })

  describe('GET api/houses', () => {
    beforeEach(done => {
      var newHouse = new House({
        title: "Hello World",
        author: "Jhon Doe",
        image: "testLink",
        city: "Jakarta",
        location: "Jalan Raya Indah",
        price: 20000000,
        description: "Lorem Ipsum Dolor sit Amet",
        createdAt: new Date()
      })
      newHouse.save((err, result) => {})
      done()
    });

    it('should get all artcile', done => {
      chai.request(server)
      .get('/api/houses')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.equal(1);
        done()
      })

    })
  })

  describe('POST api/houses', () => {
    it('should create a house', (done) => {
      chai.request(server)
      .post('/api/houses')
      .send({
        title: "Hello World",
        author: "Jhon Doe",
        image: "testLink",
        city: "Jakarta",
        location: "Jalan Raya Indah",
        price: 20000000,
        description: "Lorem Ipsum Dolor sit Amet",
        createdAt: new Date()
      })
      .end((err,res) => {
        res.should.have.a.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property("title", 'Hello World')
        done();
      })
    });
  });

  describe('DELETE api/houses/:id', () => {
    var target
    beforeEach(done => {
      var newHouse = new House({
        title: "Hello World",
        author: "Jhon Doe",
        image: "testLink",
        city: "Jakarta",
        location: "Jalan Raya Indah",
        price: 20000000,
        description: "Lorem Ipsum Dolor sit Amet",
        createdAt: new Date()
      })
      newHouse.save((err, result) => {
        target = result._id
        done()
      })
    });

    it('should remove a house', (done) => {
      chai.request(server)
      .delete(`/api/houses/${target}`)
      .end((err,res) => {
        res.should.have.a.status(200)
        res.body.should.be.a('object')
        res.text.should.equal('House removed')
        done();
      })
    });
  });

  describe('GET api/houses/:id', () => {
    var target
    beforeEach(done => {
      var newHouse = new House({
        title: "Hello World",
        author: "Jhon Doe",
        image: "testLink",
        city: "Jakarta",
        location: "Jalan Raya Indah",
        price: 20000000,
        description: "Lorem Ipsum Dolor sit Amet",
        createdAt: new Date()
      })
      newHouse.save((err, result) => {
        target = result._id
        done()
      })
    });

    it('should return house with id', (done) => {
      chai.request(server)
      .get(`/api/houses/${target}`)
      .end((err, res) => {
        res.should.have.a.status(200)
        res.should.be.a('object')
        res.body.should.have.property("title", 'Hello World')
        res.body.should.have.property('description', 'Lorem Ipsum Dolor sit Amet')
        done();
      })
    })
  })

  describe('PUT api/houses/:id', () => {
    var target
    beforeEach(done => {
      var newHouse = new House({
        title: "Hello World",
        author: "Jhon Doe",
        image: "testLink",
        city: "Jakarta",
        location: "Jalan Raya Indah",
        price: 20000000,
        description: "Lorem Ipsum Dolor sit Amet",
        createdAt: new Date()
      })
      newHouse.save((err, result) => {
        target = result._id
        done()
      })
    });

    it('should update house with id', (done) => {
      chai.request(server)
      .put(`/api/houses/${target}`)
      .send({
        title: "Hello World Web",
        author: "Jhon Doe Foo",
        description: "Empty Lorem Ipsum Dolor sit Amet"
      })
      .end((err, res) => {
        res.should.have.a.status(200)
        res.should.be.a('object')
        res.body.should.have.property('title', 'Hello World Web')
        res.body.should.have.property('description', 'Empty Lorem Ipsum Dolor sit Amet')
        done();
      })
    })
  })
})
