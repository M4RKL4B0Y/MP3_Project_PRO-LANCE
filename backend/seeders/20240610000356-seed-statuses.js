'use strict';

const { Sequelize } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize)=>{
    await queryInterface.bulkInsert('Statuses', [
      { id: 1, name: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'in-progress', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'completed', createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Statuses', null, {});
  }
};
