module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('material_kit', {
      id_mtl_material: {
        type: Sequelize.INTEGER,
        reference: { model: 'mtl_material', key: 'id' },
        allowNull: false,
      },
      id_ktt_kit: {
        type: Sequelize.INTEGER,
        reference: { model: 'mtl_material', key: 'id' },
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('material_kit');
  },
};
