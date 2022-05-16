import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

import MaterialController from './controllers/MaterialController';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import FileController from './controllers/FileController';
import KitController from './controllers/KitController';
import StatusController from './controllers/StatusController';
import CategoriaController from './controllers/CategoriaController';

const routes = new Router();
const upload = multer(multerConfig);

// ======== USUÁRIO ========
// Criação de novos usuários
routes.post('/usuario', UserController.store);

// Inicializa sessão do usuário
routes.post('/sessao', SessionController.store);

// Listagem dos usuários
routes.get('/usuario', UserController.index);

// Atualização de um usuário
routes.put('/usuario', UserController.update);

// ======== MATERIAL ========
// Criação de um material
routes.post('/material', MaterialController.store);

// Listagem dos materiais
routes.get('/material', MaterialController.index);

// Remoção de um material
routes.delete('/material/:id', MaterialController.delete);

// Atualização de um material
routes.put('/material/:id', MaterialController.update);

// ======== KIT ========
// Criação de um kit
routes.post('/kit', KitController.store);

// Listagem dos kit
routes.get('/kit', KitController.index);

// Remoção de um kit
routes.delete('/kit/:id', KitController.delete);

// Atualização de um kit
routes.put('/kit/:id', KitController.update);

// ======== STATUS ========
routes.get('/status', StatusController.index);

// ======== CATEGORIA ========
routes.get('/categoria', CategoriaController.index);

// ======== AUTENTICAÇÃO ========
// Middleware de autenticação (válido apenas para as rotas a seguir)
routes.use(authMiddleware);

// ======== ARQUIVOS ========
// Upload de arquivos
routes.post('/arquivos', upload.single('arquivo'), FileController.store);

export default routes;
