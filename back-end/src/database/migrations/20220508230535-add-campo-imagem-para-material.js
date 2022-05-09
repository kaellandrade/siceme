'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('mtl_material', 'id_imagem', {
      type: Sequelize.INTEGER,
      references: { model: 'ars_arquivos', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  async down(queryInterface) {
    return queryInterface.removeColumn('mtl_material', 'id_imagem');
  },
};
