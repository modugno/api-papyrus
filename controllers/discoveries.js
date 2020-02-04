const repository = require('../repository/discovery-repository');
const httpStatus = require('http-status');
const Response = require('../utils/response');
const { catchAsync } = require('../utils/error');

exports.get = catchAsync(async(req, res, next) => {
  const result = await repository.getAll();
  res.status(httpStatus.OK).json(new Response(result));
});

exports.getById = catchAsync(async(req, res, next) => {
  const { id } = req.params;
  const result = await repository.getById(id);
  res.status(httpStatus.OK).json(new Response(result));
});

exports.create = catchAsync(async(req, res, next) => {
  const result = await repository.create(req.body)
  res.status(httpStatus.CREATED).json(new Response(result, httpStatus.CREATED));
});

exports.update = catchAsync(async(req, res, next) => {
  const { id } = req.params;
  const result = await repository.update({ id, data: req.body })
  res.status(httpStatus.OK).json(new Response(result));
});

exports.delete = catchAsync(async(req, res, next) => {
  const { id } = req.params;
  const result = await repository.delete(id)
  res.status(httpStatus.OK).json(new Response(result));
});
