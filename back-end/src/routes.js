import { Router } from 'express';
import Material from './app/models/Material';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';

const routes = new Router();

// GET material
routes.get('/material', async (req, res) => {
  const material = await Material.findAll();

  return res.json({ material });
});

// POST usuário
routes.post('/usuario', UserController.store);

// POST seção
routes.post('/sessao', SessionController.store);

export default routes;
