'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var houseSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please enter your adds title']
  },
  description: {
    type: String,
    required: [true, 'Please enter your house description']
  },
  image: Array,
  city: {
    type: String,
    required: [true, 'Please enter your city']
  },
  location: {
    type: String,
    required: [true, 'Please enter your location']
  },
  price: {
    type: String,
    required: [true, 'Please enter your price']
  },
  createdAt: Date,
  lb: {
    type: Number,
    required: [true, 'Please enter house area']
  },
  lt: {
    type: Number,
    required: [true, 'Please enter luas tanah']
  },
  kt: {
    type: Number,
    required: [true, 'Please enter bedroom number']
  },
  km: {
    type: Number,
    required: [true, 'Please enter bathroom number']
  }
})

var House = mongoose.model('House', houseSchema);

module.exports = House;
