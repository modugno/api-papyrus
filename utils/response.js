const httpStatus = require('http-status');

class Response {
  constructor(result, status = httpStatus.OK) {
    this.result = result;
    this.status = status;
  }
}

module.exports = Response;
