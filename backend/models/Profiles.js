'use strict';

const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
        title: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        freelancer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        trade_offering: {
            type: DataTypes.STRING,
            allowNull: false
        },
        skills: {
            type: DataTypes.STRING,
            allowNull: false
        },
        experience: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        languages: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});

    Profile.associate = function(models) {
        Profile.belongsTo(models.User, { foreignKey: 'freelancer_id', as: 'freelancer' });
        Profile.hasMany(models.Project, { foreignKey: 'profile_id', as: 'projects' });
    };

    return Profile;
};
