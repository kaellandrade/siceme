'use_strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.renameColumn('mtl_material', 'mrl_nome', 'mtl_nome');
    await queryInterface.renameColumn(
      'mtl_material',
      'mrl_quantidade',
      'mtl_quantidade',
    );
  },

  async down(queryInterface) {
    await queryInterface.renameColumn('mtl_nome', 'mtl_nome', 'mrl_nome');
    await queryInterface.renameColumn(
      'mrl_quantidade',
      'mtl_quantidade',
      'mrl_quantidade',
    );
  },
};
