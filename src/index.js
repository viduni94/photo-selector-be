import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import { SwaggerSpec } from './config';
import { logger, contextMiddleware } from './utils/logger';
import photoGridV1Routes from './modules/api/v1/photoGrid';

require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Attach a unique request ID to every log line
app.use(contextMiddleware);

app.use('/api/v1', photoGridV1Routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(SwaggerSpec));

app.listen(port, function() {
    console.log("Running Photo Selector BE on Port "+ port);
});

export default app;
