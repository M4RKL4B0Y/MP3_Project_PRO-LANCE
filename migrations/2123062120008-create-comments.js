'use strict';

const { DataTypes } = require('sequelize');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true
      
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
      },
      project_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Projects',
          key: 'id'
        }
        },
        task_id: {
          type: DataTypes.INTEGER,
           references: {
            model: 'Tasks',
            key: 'id'
           }
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
    await queryInterface.dropTable('Comments');
  }
};
