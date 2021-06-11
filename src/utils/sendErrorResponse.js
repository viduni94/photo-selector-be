// Helper function to format error responses
const sendErrorResponse = (res, status, errors) => {
  return res.status(status).json({ status: status, errors: errors }).end();
};

export default sendErrorResponse;
