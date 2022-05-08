import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Material from '../app/models/Material';
import Usuario from '../app/models/Usuario';

const models = [Material, Usuario];

/**
 * Realizando conexão com o banco de dados
 * e realizando o loaders dos Models
 * @author Manoel e Micael
 * @version 1.0.0 Realizando conexão
 */
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
