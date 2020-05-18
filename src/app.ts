import 'reflect-metadata';
import 'dotenv/config';
import express, { Application } from 'express';
import 'express-async-errors';

import handleExceptionError from './middlewares/handleExceptionError';

import Routes from './routes';
import './database';

class App {
  public server: Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.server.use(express.json());
  }

  routes(): void {
    this.server.use(Routes);
    this.server.use(handleExceptionError);
  }
}

export default new App().server;
