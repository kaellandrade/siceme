'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('tps_tipos_usuarios', [
      {
        tps_nome: 'ADMINISTRADOR',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        tps_nome: 'FUNCIONARIO_CME',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        tps_nome: 'FUNCIONARIO_SOLICITANTE',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('tps_tipos_usuarios', null, {});
  },
};
