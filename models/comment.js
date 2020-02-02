const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  description: String,
  created_at: {
    type: Date,
    default: new Date
  }
});

module.exports = mongoose.model('Comments', commentSchema);
