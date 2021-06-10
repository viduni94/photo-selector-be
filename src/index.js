import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { errors } from 'celebrate';
import { SwaggerSpec } from './config';
import photoGridV1Routes from './modules/api/v1/photoGrid';
import setContext from './utils/async-context';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const DB_URI = process.env.DB_URI;
const SWAGGER_ENDPOINT = process.env.SWAGGER_ENDPOINT;
const SERVER_URL = process.env.SERVER_URL;

// Database connection
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'PHOTO_GRID_DB',
});

const db = mongoose.connection;
db.once("open", async () => {
  console.log("Connected to database");
});

db.on("error", (err) => {
  console.log("Error connecting to database  ", err);
});

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Attach a unique request ID to every log line
app.use(setContext);

app.get('/health-check', (req, res) => res.status(200).end());
app.use('/api/v1/photos-grid', photoGridV1Routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(SwaggerSpec));

app.use(errors());

app.listen(port, function () {
  console.log('Running Photo Selector BE on\t: ' + `${SERVER_URL}:${port}`);
  console.log('API Documentation\t\t: ' + `${SERVER_URL}:${port}${SWAGGER_ENDPOINT}`);
});

export default app;
