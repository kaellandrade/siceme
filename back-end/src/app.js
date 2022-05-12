import express from 'express';
import path from 'path';
import routes from './routes';
import './database';

/**
 * Classe responsável por configurar o servidor juntamente com os
 * middlewares.
 * @author Manoel e Micael
 * @version 1.0.0 Realizando conexão
 */
class App {
  /**
   * Iniciliazando as rotas e os meddewares.
   * @since 1.0.0 versão inicial.
   */
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/arquivos',
      express.static(path.resolve(__dirname, '..', 'temp', 'uploads')),
    );
  }

  routes() {
    this.server.use(routes);
  }

  set setPort(port) {
    this.server.listen(port);
  }
}

export default new App();
