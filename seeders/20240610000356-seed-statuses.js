'use strict';

const { Sequelize } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize)=>{
    await queryInterface.bulkInsert('Statuses', [
      { name: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { name: 'in-progress', createdAt: new Date(), updatedAt: new Date() },
      { name: 'completed', createdAt: new Date(), updatedAt: new Date() },
      { name: 'at-risk', createdAt: new Date(), updatedAt: new Date() },
      { name: 'late', createdAt: new Date(), updatedAt: new Date() },
      { name: 'canceled', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Statuses', null, {});
  }
};
