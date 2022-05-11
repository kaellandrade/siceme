'use_strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ars_arquivos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ars_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ars_path: {
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
    await queryInterface.dropTable('ars_arquivos');
  },
};
