const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for provider
let ProviderSchema = new Schema({
  // max length of 50 for first and last name
  last_name: { type: String, required: true, max: 50 },
  first_name: { type: String, required: true, max: 50 },
  // max length of email
  email_address: { type: String, required: true, max: 254 },
  // max length of 100 for specialty and practice name
  specialty: { type: String, max: 100 },
  practice_name: { type: String, max: 100 }
});

// Export the model
module.exports = mongoose.model('Provider', ProviderSchema);
