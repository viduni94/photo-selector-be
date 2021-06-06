const sendErrorResponse = (res, status, errors) => {
  return res.status(status).json({ status: status, errors: errors }).end();
};

module.exports = sendErrorResponse;
