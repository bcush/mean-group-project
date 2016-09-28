// Require some packages that we will use
var mongoose = require('mongoose');

// Make our Calendar model available
var Calendar = mongoose.model('Calendar');

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

  // Add a new Calendar
  add: function(req,res) {
    console.log("calendars.add called");
    var calendar = new Calendar(req.body);
    calendar.save(function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("Calendar successfully saved.");
      }
    });
  },

  // Get all Calendars
  getAll: function(req, res) {
    Calendar.find({}).exec(function(err, calendars) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(calendars);
      }
    });
  },

  // Get a Calendar
  get: function(res, req) {
    Calendar.update({_id: req.params.id}).exec(function(err, calendar) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(calendar);
      }
    });
  },

  // Delete a Calendar
  delete: function(req, res) {
    Calendar.remove({_id: req.params.id}).exec(function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("Calendar successfully deleted.");
      }
    });
  }
};
