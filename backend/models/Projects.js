'use strict';

const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Project = sequelize.define('Project', {
        title: {
            type: DataTypes.TEXT,
            allowNull: false
          },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          startDate: { 
            type: DataTypes.DATE,
            allowNull: false
          },
          endDate: {
            type: DataTypes.DATE,
            allowNull: false
          },
          estimate: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
          },
            client_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          estimate_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          freelancer_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: 'User', 
              key: 'id' 
            }
          }
}, {});
//associations
Project.associate = function(models) { 
    Project.belongsTo(models.User, {foreignKey: 'client_id', as: 'client'});
    Project.belongsTo(models.User, {foreignKey: 'freelancer_id', as: 'freelancer'});  
    Project.hasMany(models.Estimate, {foreignKey: 'project_id', as: 'estimates'});
    Project.hasMany(models.Invoice, { foreignKey: 'project_id', as: 'invoices'});

           

};

return Project;

};

