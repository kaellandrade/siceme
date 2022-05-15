import Sequelize, { Model } from 'sequelize';

/**
 * Model Referente a Entidade Material
 * @author Manoel
 * @version 1.0.0 Adicionando os campos básicos de kit
 */
class Kit extends Model {
  static init(sequelize) {
    super.init(
      {
        ktt_nome: Sequelize.STRING,
        ktt_codigo: Sequelize.STRING,
        ktt_categoria: Sequelize.STRING,
        ktt_array_materiais: Sequelize.VIRTUAL,
      },
      {
        sequelize,
        tableName: 'ktt_kit',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Arquivo, { foreignKey: 'id_imagem', as: 'imagem' });
    this.hasMany(models.MaterialKit, {
      foreignKey: 'id_ktt_kit',
      as: 'has_id_kit',
    });
  }
}

export default Kit;
