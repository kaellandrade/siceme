import Sequelize, { Model } from 'sequelize';

/**
 * Model Referente a Entidade Material
 * @author Manoel e Micael
 * @version 1.0.0 Adicionando os campos básicos de material
 */
class Material extends Model {
  static init(sequelize) {
    super.init(
      {
        mrl_nome: Sequelize.STRING,
        mrl_quantidade: Sequelize.INTEGER,
        //mrl_dataFabricacao: Sequelize.DATE,
        //mrl_codigo: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );
  }
}

export default Material;
