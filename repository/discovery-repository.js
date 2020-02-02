const discoverySchema = require('../models/discovery');

exports.getAll = () => (
  discoverySchema.find({}).sort({ date: 1 })
);

exports.getById = (id) => (
  discoverySchema.findById(id)
);

exports.create = (data) => (
  discoverySchema.create(data)
);

exports.update = ({ id, data }) => (
  discoverySchema.findByIdAndUpdate(id, data, { new: true })
);

exports.delete = (id) => (
  discoverySchema.findByIdAndDelete(id)
);
