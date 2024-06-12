'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Types', [
            { name: 'Development - Frontend/Backend', category: 'project', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Contracting - General', category: 'project', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Contracting - Electrical', category: 'project', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Contracting - Plumbing', category: 'project', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Contracting - HVAC', category: 'project', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Petcare - 1 day +', category: 'project', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Errand', category: 'task', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Housekeeping', category: 'task', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Petcare - 1 day', category: 'task', createdAt: new Date(), updatedAt: new Date() }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Types', null, {});
    }
};
