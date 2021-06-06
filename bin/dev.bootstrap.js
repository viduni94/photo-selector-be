const { join } = require('path');

require('babel-register');
require('dotenv/config');

require(join(process.cwd(), 'src'));
