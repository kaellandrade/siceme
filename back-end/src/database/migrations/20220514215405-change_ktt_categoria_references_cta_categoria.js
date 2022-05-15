'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.removeColumn('ktt_kit', 'ktt_categoria');
  },
};
