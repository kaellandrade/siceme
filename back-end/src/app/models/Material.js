import Sequelize, { Model } from 'sequelize';

/**
 * Model Referente a Entidade Material
 * @author Manoel e Micael
 * @version 1.0.0 Adicionando os campos básicos de material
 * @version 1.0.1 Id inferido automaticamente pelo Sequelize
 */
class Material extends Model {
  static init(sequelize) {
    super.init(
      {
        mtl_nome: Sequelize.STRING,
        mtl_quantidade: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'mtl_material',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Arquivo, { foreignKey: 'id_imagem' });
  }
}

export default Material;
