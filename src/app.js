import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import dbConfig from './db/config';
import routes from './routes';

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 8080;

const env = process.env.NODE_ENV || 'development';

if (dbConfig[env].use_env_variable) {
  mongoose.connect(process.env[dbConfig.use_env_variable]);
} else {
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  mongoose.connect(dbConfig[env].database);
}

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});

db.once('open', () => {
  console.info('Connected to MongoDB');
});

const app = express();
app.enable('Trust proxy');

app.use(cors({
  origin: true,
  methods: ['GET', 'PUT', 'POST'],
  credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes to Restful API
routes(app);

app.use('*', (req, res) => res.status(404).json({ message: 'Unhandled route requested (404)' }));

app.listen(process.env.PORT || port, () => {
  // eslint-disable-next-line no-console
  console.info(`Server running on port ${process.env.PORT || port}`);
});


export default app;
