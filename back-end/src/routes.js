import { Router } from 'express';
import Material from './app/models/Material';

const routes = new Router();
routes.get('/material', async (req, res) => {
  const material = await Material.create({
    mrl_nome: 'Agulhinha',
    mrl_quantidade: 10,
  });

  return res.send(material);
});

export default routes;
