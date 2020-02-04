const repository = require('../repository/discovery-repository');
const httpStatus = require('http-status');
const { catchAsync } = require('../utils/error');

exports.get = catchAsync(async(req, res, next) => {
  const result = await repository.getAll();
  res.status(httpStatus.OK).json(
    { result, status: httpStatus.OK }
  );
});

exports.getById = catchAsync(async(req, res, next) => {
  const { id } = req.params;
  const result = await repository.getById(id);
  res.status(httpStatus.OK).json(
    { result, status: httpStatus.OK }
  );
});

exports.create = catchAsync(async(req, res, next) => {
  const result = await repository.create(req.body)
  res.status(httpStatus.CREATED).json(
    { result, status: httpStatus.CREATED }
  );
});

exports.update = catchAsync(async(req, res, next) => {
  const { id } = req.params;
  const result = await repository.update({ id, data: req.body })
  res.status(httpStatus.OK).json(
    { result, status: httpStatus.OK }
  );
});

exports.delete = catchAsync(async(req, res, next) => {
  const { id } = req.params;
  const result = await repository.delete(id)
  res.status(httpStatus.OK).json(
    { result, status: httpStatus.OK }
  );
});
