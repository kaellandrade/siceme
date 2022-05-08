import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import Material from './app/models/Material';
import authMiddleware from './app/middlewares/auth';

import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import FileController from './controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/material', async (req, res) => {
  const materiais = await Material.findAll();

  return res.json({ materiais });
});

// Cria usuário
routes.post('/usuario', UserController.store);

// Inicializa sessão do usuário
routes.post('/sessao', SessionController.store);

// Middleware de autenticação (válido apenas para as
// rotas a seguir)
routes.use(authMiddleware);

// Upload de arquivos
routes.post('/arquivos', upload.single('arquivo'), FileController.store);

// Atualiza usuário
routes.put('/usuario', UserController.update);

export default routes;
