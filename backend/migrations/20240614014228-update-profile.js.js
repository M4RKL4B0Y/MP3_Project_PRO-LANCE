'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Profiles', 'Trade_offering', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('Profiles', 'Skills', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('Profiles', 'Experience', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('Profiles', 'Location', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('Profiles', 'Languages', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('Profiles', 'Contact', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('Profiles', 'image', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Profiles', 'trade_offering', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('Profiles', 'skills', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('Profiles', 'experience', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('Profiles', 'location', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('Profiles', 'languages', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('Profiles', 'contact', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('Profiles', 'image', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  }
};
