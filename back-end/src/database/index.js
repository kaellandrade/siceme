import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Material from '../app/models/Material';
import Arquivo from '../app/models/Arquivo';
import Usuario from '../app/models/Usuario';
import Kit from '../app/models/Kit';
import MaterialKit from '../app/models/MaterialKit';

const models = [Material, Usuario, Arquivo, Kit, MaterialKit];

/**
 * Realizando conexão com o banco de dados
 * e realizando o loaders dos Models
 * @author Manoel e Micael
 * @version 1.0.0 Realizando conexão
 */
class Database {
  constructor() {
    this.sequelize = new Sequelize(databaseConfig);
    this.init();
  }

  init() {
    this.connection = this.sequelize;
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
}

export default new Database();
