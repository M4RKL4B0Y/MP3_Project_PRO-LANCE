'use strict';

const { DataTypes } = require('sequelize');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER

      },
      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
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
         model: 'Project',
         key: 'id'
        }
    },
    task_id: {  
        type: DataTypes.INTEGER,
         references: {  
            model: 'Task',
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
    await queryInterface.dropTable('Invoice');
  }
};
