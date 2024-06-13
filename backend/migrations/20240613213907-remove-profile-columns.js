'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Projects', 'profile_id', {

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Projects', 'profile_id');
  }
};
