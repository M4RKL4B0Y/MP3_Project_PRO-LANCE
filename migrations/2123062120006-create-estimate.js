'use strict';

const { DataTypes } = require('sequelize');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Estimate', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER

      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      
      freelancer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', 
          key: 'id' 
        }
      },
      project_id: {  
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
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
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
    await queryInterface.dropTable('Estimate');
  }
};
