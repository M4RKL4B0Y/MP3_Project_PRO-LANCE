'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Statuses', [
            {
                name: 'Pending',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'In Progress',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Completed',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'On Hold',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Statuses', null, {});
    }
};
