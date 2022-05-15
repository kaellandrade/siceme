module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('material_kit', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_mtl_material: {
        type: Sequelize.INTEGER,
        references: { model: 'mtl_material', key: 'id' },
        allowNull: false,
        unique: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_ktt_kit: {
        type: Sequelize.INTEGER,
        references: { model: 'ktt_kit', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
