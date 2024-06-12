'use strict';

const { Sequelize } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize)=>{
    await queryInterface.bulkInsert('Statuses', [
      { name: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { name: 'in-progress', createdAt: new Date(), updatedAt: new Date() },
      { name: 'completed', createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Statuses', null, {});
  }
};
