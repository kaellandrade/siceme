import Sequelize, { Model } from 'sequelize';

/**
 * Model Referente aos Status
 * @author Manoel e Micael
 * @version 1.0.0 Adicionando os campos básicos de material
 * @version 1.0.1 Id inferido automaticamente pelo Sequelize
 */
class Status extends Model {
  static init(sequelize) {
    super.init(
      {
        sts_status_nome: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'sts_status',
      },
    );
    return this;
  }
}

export default Status;
