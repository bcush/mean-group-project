// Require some packages that we will use
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// Define our User schema
// Require username and require unique value
var UserSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, index: { unique: true }},
  phone: { type: String, require: true },
  zip: { type: Number, require: true },
  notes: String,
  _barberFave: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Barber' }],
  password: { type: String, required: true }
}, {timestamps: true});

// hash the password before the user is saved
UserSchema.pre('save', function(next) {
  var user = this;

  // hash the password only if the password has been changed or user is new
  if (!user.isModified('password')) return next();

  // generate the salt
  bcrypt.hash(user.password, null, null, function(err, hash) {
    if (err) return next(err);

    // change the password to the hashed version
    user.password = hash;
    next();
  });
});

// Create our User schema
mongoose.model('User', UserSchema);
