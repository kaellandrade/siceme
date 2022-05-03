import { Router } from 'express';
import Material from './app/models/Material';

const routes = new Router();
routes.get('/material', async (req, res) => {
  const materiais = await Material.findAll();

  return res.json({materiais});
});

export default routes;
