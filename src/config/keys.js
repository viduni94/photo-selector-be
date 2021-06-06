const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mongoRemoteURI: process.env.PHOTO_SELECTOR_DB,
};
