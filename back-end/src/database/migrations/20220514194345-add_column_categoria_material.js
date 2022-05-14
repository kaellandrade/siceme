
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('mtl_material', 'mtl_categoria', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'cta_categoria', key: 'id' },
    });
  },

  async down(queryInterface) {
    return queryInterface.removeColumn('mtl_material', 'mtl_categoria');
  },
};
