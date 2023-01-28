import { Router } from 'express';
import { test } from './test';

const api = Router();

api.use('/test', test);

export { api };
