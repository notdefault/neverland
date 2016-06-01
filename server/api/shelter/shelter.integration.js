'use strict';

import app from '../..';
import Shelter from './shelter.model';
import request from 'supertest';

describe('Shelter API:', function() {
  var shelter;

  // Clear shelters before testing
  before(function() {
    return Shelter.remove().then(function() {
      shelter = new Shelter({
        name: 'Generic Animal Shelter',
        email: 'foo@shelter.com',
        password: 'password'
      });

      return shelter.save();
    });
  });

  // Clear shelters after testing
  after(function() {
    return Shelter.remove();
  });

  describe('GET /api/shelters/me', function() {
    var token;

    before(function(done) {
      request(app)
        .post('/auth/local')
        .send({
          email: 'test@example.com',
          password: 'password'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });

    it('should respond with a shelter profile when authenticated', function(done) {
      request(app)
        .get('/api/shelters/me')
        .set('authorization', 'Bearer ' + token)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          expect(res.body._id.toString()).to.equal(shelter._id.toString());
          done();
        });
    });

    it('should respond with a 401 when not authenticated', function(done) {
      request(app)
        .get('/api/shelters/me')
        .expect(401)
        .end(done);
    });
  });
});
