'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('mrl_material', [
      {
        mrl_nome: 'Agulha',
        mrl_quantidade: 5,
        mrl_data_cadastro: new Date(),
        mrl_data_atualizacao: new Date(),
      },
      {
        mrl_nome: 'Seringa',
        mrl_quantidade: 5,
        mrl_data_cadastro: new Date(),
        mrl_data_atualizacao: new Date(),
      },
      {
        mrl_nome: 'Medidor de pressão',
        mrl_quantidade: 18,
        mrl_data_cadastro: new Date(),
        mrl_data_atualizacao: new Date(),
      },
      {
        mrl_nome: 'Oxímetro',
        mrl_quantidade: 6,
        mrl_data_cadastro: new Date(),
        mrl_data_atualizacao: new Date(),
      },
      {
        mrl_nome: 'Estestocópio',
        mrl_quantidade: 8,
        mrl_data_cadastro: new Date(),
        mrl_data_atualizacao: new Date(),
      },
      {
        mrl_nome: 'Torniquete',
        mrl_quantidade: 19,
        mrl_data_cadastro: new Date(),
        mrl_data_atualizacao: new Date(),
      },
      {
        mrl_nome: 'Termomêtro clínico',
        mrl_quantidade: 5,
        mrl_data_cadastro: new Date(),
        mrl_data_atualizacao: new Date(),
      },
      {
        mrl_nome: 'Bisturi',
        mrl_quantidade: 15,
        mrl_data_cadastro: new Date(),
        mrl_data_atualizacao: new Date(),
      },
      {
        mrl_nome: 'Gaze',
        mrl_quantidade: 7,
        mrl_data_cadastro: new Date(),
        mrl_data_atualizacao: new Date(),
      },
      {
        mrl_nome: 'Atadura',
        mrl_quantidade: 17,
        mrl_data_cadastro: new Date(),
        mrl_data_atualizacao: new Date(),
      },
      {
        mrl_nome: 'Tesoura',
        mrl_quantidade: 5,
        mrl_data_cadastro: new Date(),
        mrl_data_atualizacao: new Date(),
      },
      {
        mrl_nome: 'Esparadrapo',
        mrl_quantidade: 19,
        mrl_data_cadastro: new Date(),
        mrl_data_atualizacao: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('mrl_material', null, {});
  },
};
