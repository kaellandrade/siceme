'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('mtl_material', [
      {
        mrl_nome: 'Agulha',
        mrl_quantidade: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mrl_nome: 'Seringa',
        mrl_quantidade: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mrl_nome: 'Medidor de pressão',
        mrl_quantidade: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mrl_nome: 'Oxímetro',
        mrl_quantidade: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mrl_nome: 'Estestocópio',
        mrl_quantidade: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mrl_nome: 'Torniquete',
        mrl_quantidade: 19,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mrl_nome: 'Termomêtro clínico',
        mrl_quantidade: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mrl_nome: 'Bisturi',
        mrl_quantidade: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mrl_nome: 'Gaze',
        mrl_quantidade: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mrl_nome: 'Atadura',
        mrl_quantidade: 17,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mrl_nome: 'Tesoura',
        mrl_quantidade: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mrl_nome: 'Esparadrapo',
        mrl_quantidade: 19,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('mtl_material', null, {});
  },
};
