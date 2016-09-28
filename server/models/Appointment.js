// Require some packages that we will use
var mongoose = require('mongoose');

// Define our appointment schema
//
var AppointmentSchema = new mongoose.Schema({
  _user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  _barber: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Barber' }],
  date: Date,
  time: { type: Number, min: 9, max: 17, get: v => Math.round(v), set: v => Math.round(v) }
}, {timestamps: true});

// Create our appointment schema
mongoose.model('Appointment', AppointmentSchema);
