'use_strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mtl_material', {
      id: {
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
    await queryInterface.dropTable('mtl_material');
  },
};
