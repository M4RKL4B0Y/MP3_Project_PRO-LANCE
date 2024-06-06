'use strict'

const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
    const Users = sequelize.define('Users', {
        title: { 
            type: DataTypes.STRING,
            allowNull: false
          },
          User: {
            type: DataTypes.STRING,
            allowNull: false
          },
          Trade_offering: {
            type: DataTypes.STRING,
            allowNull: false
          },
  
          Skills: {
            type: DataTypes.STRING,
            allowNull: false
          },
          Experience: {
            type: DataTypes.STRING,
            allowNull: false
          },
          Location: {
            type: DataTypes.STRING,
            allowNull: false
          },
          Languages: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Contact: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {});
    
  Users.associate = function(models) {
        Users.hasMany(models.Projects, {foreignKey: 'user_id', as: 'projects'});
    }

    module.exports = Users;

};