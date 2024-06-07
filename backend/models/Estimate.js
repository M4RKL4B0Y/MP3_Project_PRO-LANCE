'use strict';

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Estimate = sequelize.define('Estimate', {  
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        project_id: {  
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {  
                model: 'Project',
                key: 'id'
            }
        },
        task_id: {  
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {  
                model: 'Task',
                key: 'id'
            }
        }
    }, {});

    Estimate.associate = function(models) {
        Estimate.belongsTo(models.Project, { foreignKey: 'project_id', as: 'project' });
        Estimate.belongsTo(models.Task, { foreignKey: 'task_id', as: 'task' });
    
};

return Estimate;

};



