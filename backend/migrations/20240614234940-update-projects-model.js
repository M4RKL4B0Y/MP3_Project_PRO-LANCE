'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Projects', 'title', {
      type: Sequelize.TEXT,
      allowNull: false
    });
    await queryInterface.changeColumn('Projects', 'description', {
      type: Sequelize.TEXT,
      allowNull: false
    });
    await queryInterface.changeColumn('Projects', 'startDate', {
      type: Sequelize.DATE,
      allowNull: false
    });
    await queryInterface.changeColumn('Projects', 'endDate', {
      type: Sequelize.DATE,
      allowNull: false
    });
    await queryInterface.changeColumn('Projects', 'estimate', {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true
    });
    await queryInterface.changeColumn('Projects', 'status_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Statuses',
        key: 'id'
      }
    });
    await queryInterface.changeColumn('Projects', 'client_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    });
    await queryInterface.changeColumn('Projects', 'estimate_id', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
    await queryInterface.changeColumn('Projects', 'freelancer_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    });
    await queryInterface.changeColumn('Projects', 'type_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'TaskType',
        key: 'id'
      }
    });
    await queryInterface.changeColumn('Projects', 'profile_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Profiles',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};
