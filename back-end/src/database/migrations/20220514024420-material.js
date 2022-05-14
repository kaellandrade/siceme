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
      mtl_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mtl_quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mtl_codigo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      mtl_descricao: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      mtl_categoria: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mtl_subcategoria: {
        type: Sequelize.STRING,
        allowNull: true,
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
