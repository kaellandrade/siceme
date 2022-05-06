import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import Material from './app/models/Material';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/material', async (req, res) => {
  const materiais = await Material.findAll();

  return res.json({ materiais });
});

// POST usuário
routes.post('/usuario', UserController.store);

// POST seção
routes.post('/sessao', SessionController.store);

// Middleware de autenticação (válido apenas para as
// rotas a seguir)
routes.use(authMiddleware);

routes.post('/arquivos', upload.single('arquivo'), (req, res) =>
  res.json({ ok: true }),
);
// // PUT update
// routes.put('/usuario', UserController.update);

export default routes;
