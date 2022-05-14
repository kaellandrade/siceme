'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('mtl_material', [
      {
        mtl_nome: 'Agulha',
        mtl_quantidade: 5,
        mtl_codigo: '123456',
        mtl_categoria: 'CIRURGICO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mtl_nome: 'Seringa',
        mtl_quantidade: 5,
        mtl_codigo: '123457',
        mtl_categoria: 'CIRURGICO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mtl_nome: 'Medidor de pressão',
        mtl_quantidade: 18,
        mtl_codigo: '123458',
        mtl_categoria: 'CIRURGICO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mtl_nome: 'Oxímetro',
        mtl_quantidade: 6,
        mtl_codigo: '123459',
        mtl_categoria: 'CIRURGICO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mtl_nome: 'Estestocópio',
        mtl_quantidade: 8,
        mtl_codigo: '123410',
        mtl_categoria: 'CIRURGICO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mtl_nome: 'Torniquete',
        mtl_quantidade: 19,
        mtl_codigo: '123000',
        mtl_categoria: 'CIRURGICO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mtl_nome: 'Termomêtro clínico',
        mtl_quantidade: 5,
        mtl_codigo: '1231234',
        mtl_categoria: 'CIRURGICO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mtl_nome: 'Bisturi',
        mtl_quantidade: 15,
        mtl_codigo: '12312312',
        mtl_categoria: 'CIRURGICO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mtl_nome: 'Gaze',
        mtl_quantidade: 7,
        mtl_codigo: '12312312',
        mtl_categoria: 'CIRURGICO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mtl_nome: 'Atadura',
        mtl_quantidade: 17,
        mtl_codigo: '12312312',
        mtl_categoria: 'CIRURGICO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mtl_nome: 'Tesoura',
        mtl_quantidade: 5,
        mtl_codigo: '123412356',
        mtl_categoria: 'CIRURGICO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        mtl_nome: 'Esparadrapo',
        mtl_quantidade: 19,
        mtl_codigo: '1231231456',
        mtl_categoria: 'CIRURGICO',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('mtl_material', null, {});
  },
};
