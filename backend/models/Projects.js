const { DataTypes } = require('sequelize');
const sequelize =require('../config/database')
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
          status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
              model: 'Status',
              key: 'id'
            
          }
        },
            client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Users', 
              key: 'id' 
            }
          },
          estimate_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          freelancer_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: 'Users', 
              key: 'id' 
            }
          }
}, {});
//associations
Project.associate = function(models) { 
    Project.belongsTo(models.Users, {foreignKey: 'client_id', as: 'client'});
    Project.belongsTo(models.Users, {foreignKey: 'freelancer_id', as: 'freelancer'});  
    Project.hasMany(models.Estimate, {foreignKey: 'project_id', as: 'estimates'});
    Project.hasMany(models.Invoice, { foreignKey: 'project_id', as: 'invoices'});
    Project.belongsTo(models.Status, { foreignKey: 'status_id', as: 'statuses'});

           

};

return Project;

};

