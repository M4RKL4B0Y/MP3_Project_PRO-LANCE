'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Users', 'name', 'username');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Users', 'username', 'name');
  }
};
