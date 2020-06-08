import express from 'express';

import { TemplateModel } from '../../models';
import templatesData from './templates.json';

const templates = express.Router();

templates
  .get('/templates', async (req, res) => {
    const allTemplates = await TemplateModel.find().exec();
    res.json(allTemplates);
  })
  /**
   * Generate templates (avoiding migrations)
   */
  .get('/templates/init', async (req, res) => {
    try {
      await TemplateModel.deleteMany({});
      await TemplateModel.insertMany(templatesData);
      res.json('Done');
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

export default templates;
