import { Router } from 'express';
import { convertToPng, convertToGerber } from './conversionMethods.js';

const routes = new Router();

routes.post('/file', async (req, res) => {
  return res.json(req.body);
});

routes.post('/convertFileToGerber', async (req, res) => {
  await convertToPng() // --> convertToPng(req.file) passar o arquivo
  convertToGerber()
  return res.json(req.body); // retornar string do arquivo gerber
});

routes.get('/feedback', (req, res) => {
    return res.json(res);
});

export default routes;