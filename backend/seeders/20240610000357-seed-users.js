'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'William Guadalupe',
        email: 'wnguadalupe@prolance.com',
        password: 'hashed_password',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amy Pond',
        email: 'apond@prolance.com',
        password: 'hashed_password',
        role: 'freelancer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rory Williams',
        email: 'rwilliams45@gmail.com',
        password: 'hashed_password',
        role: 'client',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
