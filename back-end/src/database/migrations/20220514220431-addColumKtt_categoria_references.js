'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('ktt_kit', 'ktt_categoria', {
      type: Sequelize.INTEGER,
      allowNul: false,
      references: { model: 'cta_categoria', key: 'id' },
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('ktt_kit', 'ktt_categoria');
  },
};
