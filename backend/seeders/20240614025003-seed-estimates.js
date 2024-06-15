'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Estimate', [
      {
        title: 'Initial Estimate',
        project_id: 21, 
        task_id: 4,  
        estimate: 500.00,
        client_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Design Phase Estimate',
        project_id: 21,  
        task_id: 1,  
        estimate: 1500.00,
        client_id:11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Development Phase Estimate',
        project_id: 22,  
        task_id: 2,  
        estimate: 3000.00,
        client_id:13,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Estimate', null, {});
  }
};
