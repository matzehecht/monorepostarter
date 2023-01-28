// eslint-disable-next-line import/no-unused-modules
import { existsSync } from 'fs';
import * as dotenv from 'dotenv';
import express, { static as serve } from 'express';
import pino from 'pino-http';
import { api } from './api';

const STATIC_DIR = `${__dirname}/static` as const;
const PORT = process.env.API_PORT ?? 3000;
const hasStatic = existsSync(`${STATIC_DIR}`);

dotenv.config();

const app = express();

app.use(
  pino({
    transport: {
      options: {
        colorize: true,
      },
      target: 'pino-pretty',
    },
  })
);

app.use('/api', api);

if (hasStatic) {
  app.use(serve(STATIC_DIR));
}

app.listen(3000);

console.log(`Server running on port ${PORT}`);

if (hasStatic) {
  console.log(`Access your static site on http://localhost:${PORT}/`);
}
