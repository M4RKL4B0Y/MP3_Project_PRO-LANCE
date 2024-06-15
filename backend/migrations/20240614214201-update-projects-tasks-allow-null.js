'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Tasks', 'title', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('Tasks', 'description', {
        type: Sequelize.STRING,
        allowNull: true
    });
    await queryInterface.changeColumn('Tasks', 'startDate', {
        type: Sequelize.DATE,
        allowNull: true
    });
    await queryInterface.changeColumn('Tasks', 'endDate', {
        type: Sequelize.DATE,
        allowNull: true
    });
    await queryInterface.changeColumn('Tasks', 'estimate', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
    });
    await queryInterface.changeColumn('Tasks', 'client_id', {
        type: Sequelize.INTEGER,
        allowNull: true
    });
    await queryInterface.changeColumn('Tasks', 'estimate_id', {
        type: Sequelize.INTEGER,
        allowNull: true
    });
    await queryInterface.changeColumn('Tasks', 'freelancer_id', {
        type: Sequelize.INTEGER,
        allowNull: true
    });
    await queryInterface.changeColumn('Tasks', 'type_id', {
        type: Sequelize.INTEGER,
        allowNull: true
    });
    await queryInterface.changeColumn('Tasks', 'status_id', {
        type: Sequelize.INTEGER,
        allowNull: true
    });

    await queryInterface.changeColumn('Projects', 'title', {
        type: Sequelize.STRING,
        allowNull: true
    });
    await queryInterface.changeColumn('Projects', 'description', {
        type: Sequelize.STRING,
        allowNull: true
    });
    await queryInterface.changeColumn('Projects', 'startDate', {
        type: Sequelize.DATE,
        allowNull: true
    });
    await queryInterface.changeColumn('Projects', 'endDate', {
        type: Sequelize.DATE,
        allowNull: true
    });
    await queryInterface.changeColumn('Projects', 'estimate', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
    });
    await queryInterface.changeColumn('Projects', 'client_id', {
        type: Sequelize.INTEGER,
        allowNull: true
    });
    await queryInterface.changeColumn('Projects', 'estimate_id', {
        type: Sequelize.INTEGER,
        allowNull: true
    });
    await queryInterface.changeColumn('Projects', 'freelancer_id', {
        type: Sequelize.INTEGER,
        allowNull: true
    });
    await queryInterface.changeColumn('Projects', 'type_id', {
        type: Sequelize.INTEGER,
        allowNull: true
    });
    await queryInterface.changeColumn('Projects', 'status_id', {
        type: Sequelize.INTEGER,
        allowNull: true
    });
},

down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Tasks', 'title', {
        type: Sequelize.STRING,
        allowNull: false
    });
    await queryInterface.changeColumn('Tasks', 'description', {
        type: Sequelize.STRING,
        allowNull: false
    });
    await queryInterface.changeColumn('Tasks', 'startDate', {
        type: Sequelize.DATE,
        allowNull: false
    });
    await queryInterface.changeColumn('Tasks', 'endDate', {
        type: Sequelize.DATE,
        allowNull: false
    });
    await queryInterface.changeColumn('Tasks', 'estimate', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    });
    await queryInterface.changeColumn('Tasks', 'client_id', {
        type: Sequelize.INTEGER,
        allowNull: false
    });
    await queryInterface.changeColumn('Tasks', 'estimate_id', {
        type: Sequelize.INTEGER,
        allowNull: false
    });
    await queryInterface.changeColumn('Tasks', 'freelancer_id', {
        type: Sequelize.INTEGER,
        allowNull: false
    });
    await queryInterface.changeColumn('Tasks', 'type_id', {
        type: Sequelize.INTEGER,
        allowNull: false
    });
    await queryInterface.changeColumn('Tasks', 'status_id', {
        type: Sequelize.INTEGER,
        allowNull: false
    });

    await queryInterface.changeColumn('Projects', 'title', {
        type: Sequelize.STRING,
        allowNull: false
    });
    await queryInterface.changeColumn('Projects', 'description', {
        type: Sequelize.STRING,
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
        allowNull: false
    });
    await queryInterface.changeColumn('Projects', 'client_id', {
        type: Sequelize.INTEGER,
        allowNull: false
    });
    await queryInterface.changeColumn('Projects', 'estimate_id', {
        type: Sequelize.INTEGER,
        allowNull: false
    });
    await queryInterface.changeColumn('Projects', 'freelancer_id', {
        type: Sequelize.INTEGER,
        allowNull: false
    });
    await queryInterface.changeColumn('Projects', 'type_id', {
        type: Sequelize.INTEGER,
        allowNull: false
    });
    await queryInterface.changeColumn('Projects', 'status_id', {
        type: Sequelize.INTEGER,
        allowNull: false
    });
}
};

