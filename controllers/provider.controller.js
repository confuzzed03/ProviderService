const Provider = require('../models/provider.model');
const providers = require('../backup/providers.json');

// GET providers
exports.provider_readAll = function(req, res) {
  // retrieve all providers in database
  Provider.find({}, (err, results) => {
    if (err) {
      return next(error);
    }
    // when providers are added, reversing data will place them on top of provider directory
    res.send(results.reverse());
  });
};

// POST provider
exports.provider_create = function(req, res) {
  Provider.findOne({ email_address: req.body.email_address }, (err, result) => {
    if (err) {
      return next(err);
    }

    // perform search through providers to ensure email address isn't already taken
    if (result) res.send({ error: 'Email address already exists!' });
    else {
      let provider = new Provider({
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        email_address: req.body.email_address,
        specialty: req.body.specialty,
        practice_name: req.body.practice_name
      });
      // save new provider in database
      provider.save(function(err, result) {
        if (err) {
          return next(err);
        }
        res.send(result);
      });
    }
  });
};

// DELETE provider
exports.provider_delete = function(req, res) {
  // search through providers and delete the match
  Provider.findOneAndDelete({ _id: req.params.id }, err => {
    if (err) {
      return next(error);
    }
    res.send('Delete is SUCCESSFUL');
  });
};

// DELETE multiple providers
exports.provider_deleteMultiple = function(req, res) {
  // given an array of ID's, delete providers on each ID
  Provider.deleteMany({ _id: { $in: req.body } }, err => {
    if (err) {
      return next(error);
    }
    res.send('Multiple Delete is SUCCESSFUL');
  });
};

// RESET providers
exports.provider_reset = function(req, res) {
  // providers can be repopulated in DB from json file in backup folder
  // first delete all providers, then populate DB from backup json
  Provider.deleteMany({}, err => {
    if (!err) {
      Provider.create(providers, error => {
        if (error) {
          return next(error);
        }
        res.send('Reset is SUCCESSFUL');
      });
    }
  });
};
