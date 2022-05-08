import { Router } from 'express';
import MaterialController from './controllers/MaterialController';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
// Criação de novos usuários
routes.post('/usuario', UserController.store);

// Login
routes.post('/sessao', SessionController.store);

// Middleware de autenticação (válido apenas para as rotas a seguir)
routes.use(authMiddleware);
// PS: Apartir daqui todas as rotas são protegidas.

// Rotas para usuários;
routes.put('/usuario', UserController.update);

// Rotas para Material
routes.put('/material', MaterialController.store);
routes.get('/material', MaterialController.index);

export default routes;
