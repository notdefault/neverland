'use strict';

import mongoose from 'mongoose';

var AnimalSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Animal', AnimalSchema);
