'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Invoice = sequelize.define('Invoice', {
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          
          freelancer_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: 'User', 
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
        }
    
    
}, {});

Invoice.associate = function(model) {
    Invoice.belongsTo(models.Project, { foreignKey: 'project_id', as: 'project'}); // This line establishes a relationship between the Invoice model and the Project model
    Invoice.belongsTo(models.Task, { foreignKey: 'task_id', as: 'task' });
};

return Invoice;

};