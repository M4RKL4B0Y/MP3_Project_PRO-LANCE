'use strict';

const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
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
        },
        estimate: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('NOW')
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('NOW')
        }
    }, {});

    Estimate.associate = function(models) {
        Estimate.belongsTo(models.Project, { foreignKey: 'project_id', as: 'project' });
        Estimate.belongsTo(models.Task, { foreignKey: 'task_id', as: 'task' });
    };

    return Estimate;
};
