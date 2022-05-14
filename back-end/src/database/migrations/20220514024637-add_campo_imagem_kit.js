'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('ktt_kit', 'id_imagem', {
      type: Sequelize.INTEGER,
      references: { model: 'ars_arquivos', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  async down(queryInterface) {
    return queryInterface.removeColumn('ktt_kit', 'id_imagem');
  },
};
