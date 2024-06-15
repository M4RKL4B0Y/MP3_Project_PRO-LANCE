'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      {
        title: 'Design Homepage',
        description: 'Create the homepage design',
        startDate: '2024-07-01',
        endDate: '2024-07-15',
        estimate: 500.00,
        client_id: 1,
        estimate_id: 1,
        freelancer_id: 2,
        type_id: 1,
        status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Develop Login Feature',
        description: 'Implement the login feature for the application',
        startDate: '2024-07-16',
        endDate: '2024-07-30',
        estimate: 1000.00,
        client_id: 1,
        estimate_id: 2,
        freelancer_id: 3,
        type_id: 2,
        status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Test User Registration',
        description: 'Perform testing on the user registration process',
        startDate: '2024-08-01',
        endDate: '2024-08-10',
        estimate: 300.00,
        client_id: 1,
        estimate_id: 3,
        freelancer_id: 4,
        type_id: 3,
        status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
