'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Projects', 'profile_id', {
      type: Sequelize.INTEGER,
      allowNull: true,  // Temporarily allow null
      references: {
        model: 'Profiles',
        key: 'id'
      }
    });

    // Set a default profile_id for existing records
    const [results, metadata] = await queryInterface.sequelize.query(
      `SELECT id FROM "Profiles" LIMIT 1;`
    );
    if (results.length > 0) {
      const defaultProfileId = results[0].id;
      await queryInterface.sequelize.query(
        `UPDATE "Projects" SET profile_id = ${defaultProfileId} WHERE profile_id IS NULL;`
      );
    }

    // Change profile_id column to not allow null
    await queryInterface.changeColumn('Projects', 'profile_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Profiles',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Projects', 'profile_id');
  }
};
