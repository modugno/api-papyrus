const commentSchema = require('../models/comment');

exports.getAll = () => (
  commentSchema.find({}).sort({ created_at: 1 })
);

exports.getById = (id) => (
  commentSchema.findById(id)
);

exports.create = (data) => (
  commentSchema.create(data)
);

exports.update = ({ id, data }) => (
  commentSchema.findByIdAndUpdate(id, data, { new: true })
);

exports.delete = (id) => (
  commentSchema.findByIdAndDelete(id)
);
