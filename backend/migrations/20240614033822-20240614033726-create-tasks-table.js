'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Tasks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            startDate: { 
                type: DataTypes.DATE,
                allowNull: false
            },
            endDate: {
                type: DataTypes.DATE,
                allowNull: false
            },
            estimate: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            client_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users', 
                    key: 'id' 
                }
            },
            estimate_id: {
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
            type_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'TaskTypes',
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

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Tasks');
    }
};
