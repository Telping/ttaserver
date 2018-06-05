var jwt    = require('jsonwebtoken');
var morgan = require('morgan');
const bcrypt = require('bcrypt');
module.exports.bcrypt = bcrypt;

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Inbox = require('./api/models/inboxModel'),
  JobSeeker = require('./api/models/jobSeekerModel'),
  JobOwner = require('./api/models/jobOwnerModel'),
  Job = require('./api/models/jobModel'),
  JobRating = require('./api/models/jobRatingModel'),
  Location = require('./api/models/locationModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.set('superSecret', 'tarighazcheezburgers');


// API ROUTES -------------------

app.get('/setup', function(req, res) {

  // create a sample user
  var tarig = new JobSeeker({
    firstName: 'tarigHash',
    lastName: 'elomari',
    email: 'tarig.elomari@gmail.com',
    password: 'password',
    contactNumber: '456789',
    addressLine1: 'somewhere nice',
    postcode: 'sw4 9ij'
  });

  // save the sample user
  tarig.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

// get an instance of the router for api routes
var apiRoutes = express.Router();

// basic route
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
app.post('/authenticate', function(req, res) {

  // find the user
  JobSeeker.findOne({
    email: req.body.email
  }, function(err, jobseeker) {

    if (err) throw err;

    if (!jobseeker) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (jobseeker) {
      // check if password matches
      bcrypt.compare(req.body.password, jobseeker.password, function(err, resp) {

        if(resp) {
          // if user is found and password is right
          // create a token with only our given payload
          // we don't want to pass in the entire user since that has the password

          const payload = {
            email: jobseeker.email
          };
          var token = jwt.sign(payload, app.get('superSecret'), {
            expiresIn : 60*60*24 // expires in 24 hours
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token Tarig!',
            tokens: [{
          		type: 'access',
          		value: token,
          		expiresIn: 60*60*24,
          	}],
          //  username: jobseeker.firstName,
          });

        } else {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        }
      });
    }
  });
});

// route middleware to verify a token
app.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
});

var jobSeekerRoutes = require('./api/routes/jobSeekerRoutes'); //importing route
jobSeekerRoutes(app); //register the route

var inboxRoutes = require('./api/routes/inboxRoutes'); //importing route
inboxRoutes(app); //register the route

var jobRoutes = require('./api/routes/jobRoutes'); //importing route
jobRoutes(app); //register the route

var jobRatingRoutes = require('./api/routes/jobRatingRoutes'); //importing route
jobRatingRoutes(app); //register the route


var jobOwnerRoutes = require('./api/routes/jobOwnerRoutes'); //importing route
jobOwnerRoutes(app); //register the route

var locationRoutes = require('./api/routes/locationRoutes'); //importing route
locationRoutes(app); //register the route

app.listen(port);


console.log('TheTradesmanAppApi RESTful API server started on: ' + port);
