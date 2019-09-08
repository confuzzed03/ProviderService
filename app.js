const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const provider = require('./routes/provider.route'); // Imports routes for the products
const app = express();

//Set up mongoose connection.
const mongoose = require('mongoose');
let mongoDB =
  'mongodb+srv://test_user_1:password1234@providercluster-jq8c9.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const allowedOrigins = ['http://localhost:3000'];

app.use(
  cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/providers', provider);

let port = 9000;
app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});
