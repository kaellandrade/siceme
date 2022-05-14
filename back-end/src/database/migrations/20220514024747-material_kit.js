module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('material_kit', {
      id_mtl_material: {
        type: Sequelize.INTEGER,
        reference: { model: 'mtl_material', key: 'id' },
        allowNull: true,
      },
      id_ktt_kit: {
        type: Sequelize.INTEGER,
        reference: { model: 'ktt_kit', key: 'id' },
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('material_kit');
  },
};
