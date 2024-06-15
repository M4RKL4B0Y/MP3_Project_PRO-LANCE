'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 323,
        client_id: 1,
        username: 'client1',
        email: 'client1@example.com',
        password: 'hashedpassword1', 
        role_id: 'client',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1232,
        freelancer_id: 2,
        username: 'freelancer1',
        email: 'freelancer1@example.com',
        password: 'hashedpassword2', 
        role_id: 'freelancer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 666,
        freelancer_id: 3,
        username: 'freelancer2',
        email: 'freelancer2@example.com',
        password: 'hashedpassword3', 
        role_id: 'freelancer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        username: 'freelancer3',
        email: 'freelancer3@example.com',
        password: 'hashedpassword4', 
        role_id: 'freelancer',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
