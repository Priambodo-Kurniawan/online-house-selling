'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var houseSchema = new Schema({
  title: String,
  author: String,
  description: String,
  image: Array,
  city: String,
  location: String,
  price: Number,
  createdAt: Date
})

var House = mongoose.model('House', houseSchema);

module.exports = House;
