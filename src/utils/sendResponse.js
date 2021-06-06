const sendResponse = (res, status, data, total, page, limit) => {
  const responseObject = {
      data
  };
  total? responseObject.total = total: null;
  page? responseObject.page = page: null;
  limit? responseObject.limit = page: null;
  return res.status(status).json(responseObject).end();
};

module.exports = sendResponse;
