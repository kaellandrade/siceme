import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Material from '../app/models/Material';
import Arquivo from '../app/models/Arquivo';
import Usuario from '../app/models/Usuario';

const models = [Material, Usuario, Arquivo];

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
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
}

export default new Database();
