import Sequelize, { Model } from 'sequelize';

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
