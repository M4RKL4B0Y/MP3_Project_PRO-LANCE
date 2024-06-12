'use strict';

const { DataTypes } = require('sequelize');
module.exports = {
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER

      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Roles');
  }
};
