// Require some of the controllers we will use
var users = require('../controllers/Users.js');
var barbers = require('../controllers/Barbers.js');
var appointments = require('../controllers/Appointments.js');

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

module.exports = function(app) {

  // These will be our unprotected routes
  app.post('/register', users.register);
  app.post('/login', users.login);
  app.get('/logout', users.logout);
  app.get('/users/whoami', users.whoami);
  app.get('/users', users.getUser);
 // app.delete('/users/:user_id', users.delete);

  // This is our routes for Barbers
  app.get('/barbers', barbers.getAll);
  app.get('/barbers/:barber_id', barbers.get);
  app.post('/barbers', barbers.add);
  app.delete('/barbers/:barber_id', barbers.delete);

  // This is our routes for Appointments
  app.get('/appointments', appointments.getAll);
  app.get('/appointments/:barber_id', appointments.getAll);
  app.get('/appointments/:barber_id/:date', appointments.get);
  app.post('/appointments', appointments.add);
  app.delete('/appointments/:appointment_id', appointments.delete);

  // These will be our protected routes
  app.use(userAuth);
};

// This is our function that checks for user session
function userAuth(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}
