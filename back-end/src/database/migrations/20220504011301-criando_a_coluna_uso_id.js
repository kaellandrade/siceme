'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameColumn('uso_usuario', 'id', 'uso_id');
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameColumn('users', 'uso_id', 'id');
  },
};
