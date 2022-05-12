import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import Material from './app/models/Material';
import authMiddleware from './app/middlewares/auth';

import MaterialController from './controllers/MaterialController';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import FileController from './controllers/FileController';

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


// ======== AUTENTICAÇÃO ========
// Middleware de autenticação (válido apenas para as rotas a seguir)
routes.use(authMiddleware);
// PS: Apartir daqui todas as rotas são protegidas.



// ======== ARQUIVOS ========
// Upload de arquivos
routes.post('/arquivos', upload.single('arquivo'), FileController.store);

export default routes;
