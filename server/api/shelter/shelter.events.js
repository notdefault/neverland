/**
 * User model events
 */

'use strict';

import {EventEmitter} from 'events';
import Shelter from './shelter.model';
var ShelterEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ShelterEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Shelter.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ShelterEvents.emit(event + ':' + doc._id, doc);
    ShelterEvents.emit(event, doc);
  }
}

export default ShelterEvents;
