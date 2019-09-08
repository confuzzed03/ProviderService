const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProviderSchema = new Schema({
  last_name: { type: String, required: true, max: 50 },
  first_name: { type: String, required: true, max: 50 },
  email_address: { type: String, required: true, max: 254 },
  specialty: { type: String, max: 100 },
  practice_name: { type: String, max: 100 }
});

// Export the model
module.exports = mongoose.model('Provider', ProviderSchema);
