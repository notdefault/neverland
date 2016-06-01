'use strict';

var app = require('../..');
import request from 'supertest';

var newAnimal;

describe('Animal API:', function() {

  describe('GET /api/animals', function() {
    var animals;

    beforeEach(function(done) {
      request(app)
        .get('/api/animals')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          animals = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(animals).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/animals', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/animals')
        .send({
          name: 'New Animal',
          info: 'This is the brand new animal!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newAnimal = res.body;
          done();
        });
    });

    it('should respond with the newly created animal', function() {
      expect(newAnimal.name).to.equal('New animal');
      expect(newAnimal.info).to.equal('This is the brand new animal!!!');
    });

  });

  describe('GET /api/animals/:id', function() {
    var animal;

    beforeEach(function(done) {
      request(app)
        .get('/api/animals/' + newAnimal._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          animal = res.body;
          done();
        });
    });

    afterEach(function() {
      animal = {};
    });

    it('should respond with the requested animal', function() {
      expect(animal.name).to.equal('New Animal');
      expect(animal.info).to.equal('This is the brand new animal!!!');
    });

  });

  describe('PUT /api/animals/:id', function() {
    var updatedAnimal;

    beforeEach(function(done) {
      request(app)
        .put('/api/animals/' + newAnimal._id)
        .send({
          name: 'Updated Animal',
          info: 'This is the updated animal!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedAnimal = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAnimal = {};
    });

    it('should respond with the updated animal', function() {
      expect(updatedAnimal.name).to.equal('Updated Animal');
      expect(updatedAnimal.info).to.equal('This is the updated animal!!!');
    });

  });

  describe('DELETE /api/animals/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/animals/' + newAnimal._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when animal does not exist', function(done) {
      request(app)
        .delete('/api/animals/' + newAnimal._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
