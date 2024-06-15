'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'role_id', {
      type: Sequelize.ENUM('client', 'freelancer', 'admin'),
      allowNull: false,
      defaultValue: 'client'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'role_id');
  }
};
