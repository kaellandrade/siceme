'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('mtl_material', 'mtl_status', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface) {
    return queryInterface.removeColumn('mtl_material', 'mtl_status');
  },
};
