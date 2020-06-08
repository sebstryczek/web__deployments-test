import express from 'express';
import deployments from './deployments';
import templates from './templates';

const api = express.Router();

api.use(deployments);
api.use(templates);
api.use((req, res) => {
  res.status(404).send('Nothing here :(');
});

export default api;
