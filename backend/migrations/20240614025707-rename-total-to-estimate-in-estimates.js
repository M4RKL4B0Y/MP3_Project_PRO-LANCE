'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Estimate', 'total', 'estimate');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Estimate', 'estimate', 'total');
  }
};
