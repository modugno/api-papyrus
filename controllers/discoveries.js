const repository = require('../repository/discovery-repository');
const httpStatus = require('http-status');
const { responseSuccess, responseError } = require('../utils/response');

exports.get = (req, res) => {
  repository.getAll()
  .then((data) => {
    res.status(httpStatus.OK).send(responseSuccess({ data, status: httpStatus.OK }));
  })
  .catch((error) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(
      responseError({ error, status: httpStatus.INTERNAL_SERVER_ERROR })
    );
  });
};

exports.getById = (req, res) => {
  const { id } = req.params;

  repository.getById(id)
  .then((data) => {
    res.status(httpStatus.OK).send(responseSuccess({ data, status: httpStatus.OK }));
  })
  .catch((error) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(
      responseError({ error, status: httpStatus.INTERNAL_SERVER_ERROR })
    );
  });

};

exports.create = (req, res) => {
  // do something
  repository.create(req.body)
  .then((data) => {
    res.status(httpStatus.CREATED).send(responseSuccess({ data, status: httpStatus.CREATED }));
  })
  .catch((error) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(
      responseError({ error, status: httpStatus.INTERNAL_SERVER_ERROR })
    );
  });
};

exports.update = (req, res) => {
  const { id } = req.params;

  repository.update({ id, data: req.body })
  .then((data) => {
    res.status(httpStatus.OK).send(responseSuccess({ data, status: httpStatus.OK }));
  })
  .catch((error) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(
      responseError({ error, status: httpStatus.INTERNAL_SERVER_ERROR })
    );
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;

  repository.delete(id)
  .then((data) => {
    res.status(httpStatus.OK).send(responseSuccess({ data, status: httpStatus.OK }));
  })
  .catch((error) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(
      responseError({ error, status: httpStatus.INTERNAL_SERVER_ERROR })
    );
  });
};
