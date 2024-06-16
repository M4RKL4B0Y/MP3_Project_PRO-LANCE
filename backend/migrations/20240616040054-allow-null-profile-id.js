'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Projects', 'profile_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Profiles',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Projects', 'profile_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Profiles',
        key: 'id'
      }
    });
  }
};
