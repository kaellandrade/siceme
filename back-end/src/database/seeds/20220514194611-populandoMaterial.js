'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('mtl_material', [
      {
        mtl_nome: 'Agulha',
        mtl_quantidade: 5,
        mtl_codigo: '123456',
        mtl_categoria: 1,
        created_at: new Date(),
        updated_at: new Date(),
        mtl_status_id: 1,
        mtl_descricao: "descrição de Agulha"
      },
      {
        mtl_nome: 'Seringa',
        mtl_quantidade: 5,
        mtl_codigo: '2242345',
        mtl_categoria: 2,
        created_at: new Date(),
        updated_at: new Date(),
        mtl_status_id: 1,
        mtl_descricao: "descrição de Seringa",
      },
      {
        mtl_nome: 'Medidor de pressão',
        mtl_quantidade: 18,
        mtl_codigo: '67456734352',
        mtl_categoria: 1,
        created_at: new Date(),
        updated_at: new Date(),
        mtl_status_id: 1,
        mtl_descricao: "descrição de Medidor de pressão"
      },
      {
        mtl_nome: 'Oxímetro',
        mtl_quantidade: 6,
        mtl_codigo: '3',
        mtl_categoria: 1,
        created_at: new Date(),
        updated_at: new Date(),
        mtl_status_id: 1,
        mtl_descricao: "descrição de Oxímetro"
      },
      {
        mtl_nome: 'Estetoscópio',
        mtl_quantidade: 8,
        mtl_codigo: '4',
        mtl_categoria: 2,
        created_at: new Date(),
        updated_at: new Date(),
        mtl_status_id: 1,
        mtl_descricao: "descrição de Estetoscópio"
      },
      {
        mtl_nome: 'Torniquete',
        mtl_quantidade: 19,
        mtl_codigo: '5',
        mtl_categoria: 1,
        created_at: new Date(),
        updated_at: new Date(),
        mtl_status_id: 1,
        mtl_descricao: "descrição de Torniquete"
      },
      {
        mtl_nome: 'Termomêtro clínico',
        mtl_quantidade: 5,
        mtl_codigo: '500000',
        mtl_categoria: 1,
        created_at: new Date(),
        updated_at: new Date(),
        mtl_status_id: 1,
        mtl_descricao: "descrição de Termomêtro clínico"
      },
      {
        mtl_nome: 'Bisturi',
        mtl_quantidade: 15,
        mtl_codigo: '6',
        mtl_categoria: 1,
        created_at: new Date(),
        updated_at: new Date(),
        mtl_status_id: 1,
        mtl_descricao: "descrição de Bisturi"
      },
      {
        mtl_nome: 'Gaze',
        mtl_quantidade: 7,
        mtl_codigo: '7',
        mtl_categoria: 1,
        created_at: new Date(),
        updated_at: new Date(),
        mtl_status_id: 1,
        mtl_descricao: "descrição de Gaze"
      },
      {
        mtl_nome: 'Atadura',
        mtl_quantidade: 17,
        mtl_codigo: '8',
        mtl_categoria: 1,
        created_at: new Date(),
        updated_at: new Date(),
        mtl_status_id: 1,
        mtl_descricao: "descrição de Atadura"
      },
      {
        mtl_nome: 'Tesoura',
        mtl_quantidade: 5,
        mtl_codigo: '9',
        mtl_categoria: 1,
        created_at: new Date(),
        updated_at: new Date(),
        mtl_status_id: 1,
        mtl_descricao: "descrição de Tesoura"
      },
      {
        mtl_nome: 'Esparadrapo',
        mtl_quantidade: 19,
        mtl_codigo: '10',
        mtl_categoria: 1,
        created_at: new Date(),
        updated_at: new Date(),
        mtl_status_id: 1,
        mtl_descricao: "descrição de Esparadrapo"
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('mtl_material', null, {});
  },
};
