'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Projects', [
      {
        title: 'Before Everything Site Relaunch',
        description: 'Relaunch of the new website for Before Everything.',
        startDate: new Date(),
        endDate: new Date(new Date().setMonth(new Date().getMonth() + 2)),
        status_id: 1, 
        client_id: 3, 
        freelancer_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ready Recipe App',
        description: 'Create a new recipe app',
        startDate: new Date(),
        endDate: new Date(new Date().setMonth(new Date().getMonth() + 2)),
        status_id: 1, 
        client_id: 3, 
        freelancer_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
