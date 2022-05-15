import Sequelize, { Model } from 'sequelize';

class Categoria extends Model {
  static init(sequelize) {
    super.init(
      {
        cta_nome: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'cta_categoria',
      },
    );
    return this;
  }
}

export default Categoria;
