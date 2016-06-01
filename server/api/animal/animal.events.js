/**
 * Animal model events
 */

'use strict';

import {EventEmitter} from 'events';
import Animal from './animal.model';
var AnimalEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AnimalEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Animal.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    AnimalEvents.emit(event + ':' + doc._id, doc);
    AnimalEvents.emit(event, doc);
  }
}

export default AnimalEvents;
