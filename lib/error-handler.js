const HttpStatus = require('http-status-codes');

exports.error = (err) => {
  const statusCode = err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
  const message = HttpStatus.getStatusText(statusCode);
  return {
    responseCode: statusCode,
    headers: { 'Content-Type': 'text/plain' },
    body: message,
  };
};
