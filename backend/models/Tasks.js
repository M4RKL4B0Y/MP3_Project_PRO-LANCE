'use strict'; 

const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Tasks = sequelize.define('Tasks', {
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
          price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
          },
          startDate: {
            type: DataTypes.DATE,
            allowNull: false
          },
          client_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          price_id: {
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
Tasks.associate = function(models) { 
    Tasks.belongsTo(models.Users, {foreignKey: 'client_id', as: 'client'});
    Tasks.belongsTo(models.Users, {foreignKey: 'freelancer_id', as: 'freelancer'});  
    Tasks.belongsTo(models.Prices, {foreignKey: 'price_id', as: 'price'});
           

};

return Tasks;

};

module.exports = Tasks;