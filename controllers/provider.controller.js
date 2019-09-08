const Provider = require('../models/provider.model');
const providers = require('../backup/providers.json');

exports.provider_readAll = function(req, res) {
  Provider.find({}, (err, results) => {
    if (err) {
      return next(error);
    }
    res.send(results.reverse());
  });
};

exports.provider_create = function(req, res) {
  Provider.findOne({ email_address: req.body.email_address }, (err, result) => {
    if (err) {
      return next(err);
    }

    if (result) res.send({ error: 'Email address already exists!' });
    else {
      let provider = new Provider({
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        email_address: req.body.email_address,
        specialty: req.body.specialty,
        practice_name: req.body.practice_name
      });
      provider.save(function(err, result) {
        if (err) {
          return next(err);
        }
        res.send(result);
      });
    }
  });
};

exports.provider_delete = function(req, res) {
  Provider.findOneAndDelete({ _id: req.params.id }, err => {
    if (err) {
      return next(error);
    }
    res.send('Delete is SUCCESSFUL');
  });
};

exports.provider_reset = function(req, res) {
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
