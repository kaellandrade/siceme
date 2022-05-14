'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('mtl_material', 'mtl_status_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'sts_status', key: 'id' },
    });
  },

  async down(queryInterface) {
    return queryInterface.removeColumn('mtl_material', 'mtl_status_id');
  },
};
