'use strict';

import Shelter from './shelter.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function(err) {
    res.status(statusCode).json(err);
  }
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

/**
 * Get list of shelters
 * restriction: 'admin'
 */
export function index(req, res) {
  return Shelter.find({}, '-salt -password').exec()
    .then(shelters => {
      res.status(200).json(shelters);
    })
    .catch(handleError(res));
}

/**
 * Creates a new shelter
 */
export function create(req, res, next) {
  var newShelter = new Shelter(req.body);
  newShelter.provider = 'local';
  newShelter.role = 'shelter';
  newShelter.save()
    .then(function(shelter) {
      var token = jwt.sign({ _id: shelter._id }, config.secrets.session, {
        expiresIn: 60 * 60 * 5
      });
      res.json({ token });
    })
    .catch(validationError(res));
}

/**
 * Get a single shelter
 */
export function show(req, res, next) {
  var shelterId = req.params.id;

  return Shelter.findById(shelterId).exec()
    .then(shelter => {
      if (!shelter) {
        return res.status(404).end();
      }
      res.json(shelter.profile);
    })
    .catch(err => next(err));
}

/**
 * Deletes a shelter
 * restriction: 'admin'
 */
export function destroy(req, res) {
  return Shelter.findByIdAndRemove(req.params.id).exec()
    .then(function() {
      res.status(204).end();
    })
    .catch(handleError(res));
}

/**
 * Change a shelters password
 */
export function changePassword(req, res, next) {
  var shelterId = req.shelter._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  return Shelter.findById(shelterId).exec()
    .then(shelter => {
      if (shelter.authenticate(oldPass)) {
        shelter.password = newPass;
        return shelter.save()
          .then(() => {
            res.status(204).end();
          })
          .catch(validationError(res));
      } else {
        return res.status(403).end();
      }
    });
}

/**
 * Get my info
 */
export function me(req, res, next) {
  var shelterId = req.shelter._id;

  return Shelter.findOne({ _id: shelterId }, '-salt -password').exec()
    .then(shelter => { // don't ever give out the password or salt
      if (!shelter) {
        return res.status(401).end();
      }
      res.json(shelter);
    })
    .catch(err => next(err));
}

/**
 * Authentication callback
 */
export function authCallback(req, res, next) {
  res.redirect('/');
}
