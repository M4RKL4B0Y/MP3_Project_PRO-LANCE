const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Task = sequelize.define('Task', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
          },
        description: {
            type: DataTypes.STRING,
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
              model: 'Users', // name of the table
              key: 'id' // name of the column
            }
          }
}, {});
//associations
Task.associate = function(models) { 
    Task.belongsTo(models.Users, { foreignKey: 'client_id', as: 'client'});
    Task.belongsTo(models.Users, { foreignKey: 'freelancer_id', as: 'freelancer'});  
    Task.hasMany(models.Estimate, { foreignKey: 'task_id', as: 'estimates'});
    Task.hasMany(models.Invoice, {  foreignKey: 'task_id', as: 'invoices'});
           

};

return Tasks;

};

module.exports = Tasks;