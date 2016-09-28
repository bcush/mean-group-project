// Require some packages that we will use
var mongoose = require('mongoose');

// Define our Calendar schema
//
var CalendarSchema = new mongoose.Schema({
  username: { type: String, require: true, index: { unique: true }},
  password: String
}, {timestamps: true});

// Create our Calendar schema
mongoose.model('Calendar', CalendarSchema);
