import express from 'express';
import cors from 'cors';
import api from './api';

const app = express();

export default app
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(api);
