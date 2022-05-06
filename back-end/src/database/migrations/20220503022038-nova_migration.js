'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('uso_usuario', {
      uso_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      uso_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uso_cargo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uso_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uso_tipo_user: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  },
};
