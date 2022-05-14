'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('tps_tipos_usuarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tps_nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      tps_descricao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }
    });
},

  async down(queryInterface) {
  return queryInterface.dropTable('tps_tipos_usuarios', 'id_imagem');
},
};
