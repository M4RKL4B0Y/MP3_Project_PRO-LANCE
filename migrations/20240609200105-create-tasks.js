'use strict'

const { Sequelize } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Tasks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.TEXT,
                allowNull:false,
            },
            description: {
                type: Sequelize.TEXT
            },
            startDate: {
                type: Sequelize.DATE,
                allowNull: false
            },
            endDate: {
                type: Sequelize.DATE,
                allowNull: false
            },
             status_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Statuses',
                    key: 'id'
                }
                },
                client_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Users',
                        key: 'id'
                    }
                },
                freelancer_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Users',
                        key: 'id'
                    }
                    },
                    createdAt: {
                        allowNull: false,
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.NOW
                    },
                    updatedAt: {
                        allowNull: false,
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.NOW
                }
                });
            },

            down: async (queryInterface, Sequelize) => {
                await queryInterface.dropTable('Tasks');
            }
        };