exports.responseSuccess = ({ data, status }) => ({ result: data, status });
exports.responseError = ({ error, status }) => ({ error, status })
