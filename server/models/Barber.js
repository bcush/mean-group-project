// Require some packages that we will use
var mongoose = require('mongoose');

// Define our Barber schema
//
var BarberSchema = new mongoose.Schema({
  name: { type: String, require: true, index: { unique: true }},
  location: String,
  phone: String,
  _calendar: String
});

// Create our Barber schema
mongoose.model('Barber', BarberSchema);
