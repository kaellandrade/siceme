import Sequelize, { Model } from 'sequelize';

/**
 * Criação do model usuário
 * @author Manoel
 * @version 1.0.0 Realizando conexão
 */
class Arquivo extends Model {
  static init(sequelize) {
    super.init(
      {
        // ars_id: Sequelize.INTEGER,
        ars_nome: Sequelize.STRING,
        ars_path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3000/arquivos/${this.ars_path}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'ars_arquivos',
      },
    );
    return this;
  }
}

export default Arquivo;
