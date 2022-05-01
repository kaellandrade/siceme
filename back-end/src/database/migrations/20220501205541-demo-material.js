'use_strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mrl_material', {
      mrl_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      mrl_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mrl_quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mrl_data_cadastro: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      mrl_data_atualizacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
