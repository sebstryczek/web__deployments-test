import express from 'express';
import { DeploymentModel } from '../../models';

const deployments = express.Router();

deployments
  .get('/deployments', async (req, res) => {
    const allDeployments = await DeploymentModel.find().exec();
    res.json(allDeployments);
  })
  .post('/deployments', async (req, res) => {
    const deployment = new DeploymentModel({
      ...req.body,
      deployedAt: new Date(),
    });
    try {
      await deployment.save();
      const allDeployments = await DeploymentModel.find().exec();
      res.json(allDeployments);
    } catch (error) {
      res.status(400).json(error.message);
    }
  })
  .delete('/deployments/:id', async (req, res) => {
    try {
      await DeploymentModel.deleteOne({ _id: req.params.id });
      const allDeployments = await DeploymentModel.find().exec();
      res.json(allDeployments);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

export default deployments;
