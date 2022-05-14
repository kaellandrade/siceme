'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('uso_usuario', 'uso_tipo_user', {
      references: { model: 'tps_tipos_usuarios', key: 'id' },
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
