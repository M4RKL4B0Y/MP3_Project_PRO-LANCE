'use strict';

const { DataTypes } = require('sequelize');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Status', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Status');
  }
};
