'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ktt_kit', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ktt_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ktt_codigo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      ktt_quantidade: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('ktt_kit');
  },
};
