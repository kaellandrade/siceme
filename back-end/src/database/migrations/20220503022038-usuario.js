'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('uso_usuario', {
      id: {
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
        unique: true,
      },
      uso_tipo_user: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha_hash: {
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

  async down(queryInterface) {
    return queryInterface.dropTable('uso_usuario');
  },
};
