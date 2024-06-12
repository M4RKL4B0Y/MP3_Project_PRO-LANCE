'use strict'

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
                type: DataTypes.TEXT,
                allowNull:false,
            },
            description: {
                type: DataTypes.TEXT
            },
            startDate: {
                type: DataTypes.DATE,
                allowNull: false
            },
            endDate: {
                type: DataTypes.DATE,
                allowNull: false
            },
             status_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Statuses',
                    key: 'id'
                }
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
                    allowNull: false,
                    references: {
                        model: 'Users',
                        key: 'id'
                    }
                    },
                    createdAt: {
                        allowNull: false,
                        type: DataTypes.DATE,
                        defaultValue: Sequelize.NOW
                    },
                    updatedAt: {
                        allowNull: false,
                        type: DataTypes.DATE,
                        defaultValue: Sequelize.NOW
                }
                });
            },

            down: async (queryInterface, Sequelize) => {
                await queryInterface.dropTable('Tasks');
            }
        };