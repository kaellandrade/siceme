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
      },
      {
        sequelize,
        tableName: 'mrl_material',
      },
    );
    this.removeAttribute('id'); // Esse id é passado por padrão pelo sequlize (desabilitando)
  }
}

export default Material;
