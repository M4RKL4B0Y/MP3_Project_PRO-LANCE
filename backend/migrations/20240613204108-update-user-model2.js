'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Users', 'role', 'role_id');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Users', 'role_id', 'role');
  }
};
