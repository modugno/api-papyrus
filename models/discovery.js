const mongoose = require('mongoose');

const discoverySchema = new mongoose.Schema({
  title: String,
  description: String,
  date: {
    type: Date,
    default: new Date
  }
});

module.exports = mongoose.model('Discoveries', discoverySchema);
