'use strict';

/** @type {import('sequelize-cli').Migration} */
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

    await queryInterface.bulkInsert('Projects', [
      {
      title: 'Before Everything Site Relaunch',
      description: 'Relaunch of the new website for Before Everything.',
      startDate: new Date(),
      //set 'endDate' to a new Date objecrt representing a date 2 months from now
      endDate: new Date(new Date().setMonth(new Date().getMonth() + 2)),
      status_id: 1,
      client_id: 1,
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
        client_id: 1,
        freelancer_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});

  },

   down: async (queryInterface, Sequelize) => { // Using await to ensure that the asynchronous operation, bulkDelete, completes before moving on.
    await queryInterface.bulkDelete('Projects', null, {}); // The second argument is the where clause. Passing null means there is no condition,
    // so it will delete all entries in the table without filtering.
    await queryInterface.bulkDelete('Users', null, {}); // The third argument is the options object. Passing an empty object `{}` means using default options.
  }
};
