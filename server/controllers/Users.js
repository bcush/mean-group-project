// Require some packages that we will use
var mongoose = require('mongoose');

// Make our User model available
var User = mongoose.model('User');

var bcrypt = require('bcrypt-nodejs');

// What is module.exports?
// By default, JavaScript doesn’t have a way to pass information between
// different files. module.exports is Node’s way of fixing this problem.
// You can think of module.exports as a giant object for our application. When
// our application starts, this module.exports object looks like this:

// module.exports = {};

// As we start pulling things into our app with require(), everything is added
// to this object. So now as we add that new config.js file with
// require(./config.js);, we have access to those variables since we passed them
// through module.exports. This is how we will be passing information to and
// from all of our files and we’ll see this in practice again when we create
// our routes files. It is also important to note that many tutorials on the
// web will switch between module.exports and exports. They mean the same thing
// and can be used interchangeably.

module.exports = {

  // User controller for registering a new user
  // Validations: [form data] password == pw_confirm
  register: function(req, res) {
    if (req.body.password != req.body.pw_confirm) {
      // HTTP Status 400: Client Error - Bad Request
      res.sendStatus(400);
    } else {
      var user = new User(req.body);
      user.save(function(err, user) {
        if (err) {
          // HTTP Status 500: Server Error - Internal Server Error
          res.sendStatus(500);
        } else {
          // Hang user property on session
          req.session.user = user;

          // Send user object back in response
          res.send(user);
        }
      });
    }
  },

  getUser: function(req,res){
    User.findOne({_id:req.session.user._id}, function(err, user){
      console.log(req.session.user._id);
      if(err){
        console.log('Couldnt find user');
        res.sendStatus(400);
      }else{
        res.json(user);
      }
    });
  },
  // Returns currently logged in user
  // whoami: function(req, res) {
  //   if (req.session.user) {
  //     res.send(req.session.user);
  //   } else {
  //     res.sendStatus(500);
  //   }
  // },

  // Returns currently logged in user
  logout: function(req, res) {
    if (req.session) {
      req.session.destroy();
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  },

  // User controller for logging in user
  // Validations: [form data] password == found user password
  login: function(req, res) {
    // console.log(req.body);
    User.findOne({email: req.body.email}).exec(function(err, user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        // Hang user property on user
        req.session.user = user;

        // Send user object back in response
        res.send(user);
      } else {
        // HTTP Status 400: Client Error - Bad Request
        res.sendStatus(400);
      }
    });

  }
};
