const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Projects = sequelize.define('Projects', {
        description: {
            type: DataTypes.STRING,
            allowNull: false
          },
          Date: {
            type: DataTypes.RANGE(DataTypes.DATE),
            allowNull: false
          },
          cost: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
          }
        });
        
        module.exports = Projects;

};