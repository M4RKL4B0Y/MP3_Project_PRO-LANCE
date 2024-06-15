'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 10,
        username: 'John Doe',
        email: 'john.doe@example.com',
        password: 'hashedpassword1', 
        role_id: 'freelancer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        username: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'hashedpassword2',
        role_id: 'freelancer', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2001,
        username: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: 'hashedpassword3', 
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
