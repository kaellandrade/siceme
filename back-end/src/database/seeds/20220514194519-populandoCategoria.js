'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('cta_categoria', [
      {
        cta_nome: 'CIRÚRGICO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        cta_nome: 'CIRÚRGICO INFANTIL',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        cta_nome: 'CIRÚRGICO ADULTO',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('cta_categoria', null, {});
  },
};
