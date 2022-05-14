'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('sts_status', [
      {
        sts_status_nome: 'LIMPEZA:Processando',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        sts_status_nome: 'LIMPEZA:PRONTO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        sts_status_nome: 'DESINFECÇÃO:PROCESSANDO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        sts_status_nome: 'DESINFECÇÃO:PRONTO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        sts_status_nome: 'ESTERILIZAÇÃO:PROCESSANDO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        sts_status_nome: 'ESTERILIZAÇÃO:PRONTO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        sts_status_nome: 'ENTREGUE',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        sts_status_nome: 'DEVOLVIDO',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('mtl_material', null, {});
  },
};
