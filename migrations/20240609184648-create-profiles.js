'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
        up: async(queryInterface, Sequelize) => {
                await queryInterface.createTable('Profiles', {
                        id: {
                            allowNull: false,
                            autoIncrement: true,
                            type: DataTypes.STRING

                        },
                        freelancer_id: {
                            type: DataTypes.INTEGER,
                            allowNull: false
                        },
                        name: {
                            type: DataTypes.STRING,
                            allowNull: false
                        },
                        Trade_offering: {
                            type: DataTypes.STRING,
                            allowNull: false
                        },

                        Skills: {
                            type: DataTypes.STRING,
                            allowNull: false
                        },
                        Experience: {
                            type: DataTypes.STRING,
                            allowNull: false
                        },
                        Location: {
                            type: DataTypes.STRING,
                            allowNull: false
                        },
                        Languages: {
                            type: DataTypes.STRING,
                            allowNull: false
                        },
                        Contact: {
                            type: DataTypes.STRING,
                            allowNull: false
                        },
                        image: {
                            type: DataTypes.STRING,
                            allowNull: false
                        }

                    });
                  },

                    down: async (queryInterface, Sequelize) => {
                      await queryInterface.dropTable('Profiles');
                    }
                  };