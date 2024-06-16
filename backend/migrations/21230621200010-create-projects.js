"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Projects", {
      id: {
        allowNull: false,

        autoIncrement: true,

        primaryKey: true,

        type: Sequelize.INTEGER,
      },

      title: {
        type: Sequelize.TEXT,

        allowNull: false,
      },

      description: {
        type: Sequelize.TEXT,

        allowNull: false,
      },

      startDate: {
        type: Sequelize.DATE,

        allowNull: false,
      },

      endDate: {
        type: Sequelize.DATE,

        allowNull: false,
      },

      estimate: {
        type: Sequelize.DECIMAL(10, 2),

        allowNull: true,
      },

      status_id: {
        type: Sequelize.INTEGER,

        allowNull: true,

        references: {
          model: "Statuses",

          key: "id",
        },
      },

      client_id: {
        type: Sequelize.INTEGER,

        allowNull: true,

        references: {
          model: "Users",

          key: "id",
        },
      },

      estimate_id: {
        type: Sequelize.INTEGER,

        allowNull: true,
      },

      freelancer_id: {
        type: Sequelize.INTEGER,

        allowNull: true,

        references: {
          model: "Users",

          key: "id",
        },
      },

      type_id: {
        type: Sequelize.INTEGER,

        allowNull: false,

        references: {
          model: "TaskType",

          key: "id",
        },
      },

      profile_id: {
        type: Sequelize.INTEGER,

        allowNull: true,

        references: {
          model: "Profiles",

          key: "id",
        },
      },

      createdAt: {
        allowNull: false,

        type: Sequelize.DATE,

        defaultValue: Sequelize.NOW,
      },

      updatedAt: {
        allowNull: false,

        type: Sequelize.DATE,

        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Projects");
  },
};
