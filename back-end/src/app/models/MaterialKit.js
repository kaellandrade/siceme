import Sequelize, { Model } from 'sequelize';

/**
 * Model Referente a Entidade Material
 * @author Manoel
 * @version 1.0.0 Adicionando os campos básicos de MaterialKit
 */
class MaterialKit extends Model {
  static init(sequelize) {
    super.init(
      {
        id_mtl_material: Sequelize.INTEGER,
        id_ktt_kit: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'material_kit',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Material, { foreignKey: 'id', as: 'id' });
    this.belongsTo(models.Kit, { foreignKey: 'id', as: 'id' });
  }
}

export default MaterialKit;
