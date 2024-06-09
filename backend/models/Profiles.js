const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Profile  = sequelize.define('Profile', {
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
    
  Profile.associate = function(models) {
        Profile.hasMany(models.Projects, {foreignKey: 'user_id', as: 'projects'});
    }

    return Profile;

};