import { dirname } from 'path';

import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    info: {
      title: 'Photo Selector Express Application',
      version: '1.0.0',
      description: 'Photo Selector Backend API Documentation ',
    },
    basePath: '/',
  },
  apis: [
    `${dirname(__dirname)}/modules/api/**/*.js`,
  ],
};

export default swaggerJSDoc(options);
