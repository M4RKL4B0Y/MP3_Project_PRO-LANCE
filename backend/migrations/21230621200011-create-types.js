'use strict'
const { DataTypes } = require('sequelize');

module.exports = { 
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Types', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            type_id: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            category: {
                type: DataTypes.ENUM('project', 'task'),
                allowNull: false
            
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
    await queryInterface.dropTable('Types');
}
};