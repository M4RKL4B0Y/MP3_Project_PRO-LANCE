'use strict';

const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Invoice = sequelize.define('Invoice', {
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
            allowNull: false,
            references: {
                model: 'Projects',
                key: 'id'
            }
        },
        task_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
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
            defaultValue: sequelize.fn('NOW')
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('NOW')
        }
    }, {});

    Invoice.associate = function(models) {
        Invoice.belongsTo(models.Project, { foreignKey: 'project_id', as: 'project' });
        Invoice.belongsTo(models.Task, { foreignKey: 'task_id', as: 'task' });
        Invoice.belongsTo(models.User, { foreignKey: 'client_id', as: 'client' });
        Invoice.belongsTo(models.User, { foreignKey: 'freelancer_id', as: 'freelancer' });
    };

    return Invoice;
};
