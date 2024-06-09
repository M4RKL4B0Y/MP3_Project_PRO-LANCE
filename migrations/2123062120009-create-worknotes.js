'use strict';

const { DataTypes } = require('sequelize');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Worknotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.STRING
      },
      comment: {
        type: DataTypes.TEXT
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
    await queryInterface.dropTable('Worknotes');
  }
};
