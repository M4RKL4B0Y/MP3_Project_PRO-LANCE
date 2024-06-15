'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'old_role_id');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'old_role_id', {
      type: Sequelize.ENUM('client', 'freelancer', 'admin'),
      allowNull: false,
      defaultValue: 'client'
    });
  }
};
