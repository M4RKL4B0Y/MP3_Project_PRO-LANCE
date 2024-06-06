'use strict'
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => { 

    const Users = sequelize.define('Users', {
        name: { 
            type: DataTypes.STRING,
            allowNull: false
          },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        role: {
            type: DataTypes.ENUM('client', 'freelancer', 'admin'), 
            allowNull: false
        }
    }, {
        hooks: { // hooks used for encryption
            beforeCreate: async (user) => {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            },
            beforeUpdate: async (user) => {
                if (user.changed('password')) {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        }
    }
});

    Users.associate = function(models) { 
        Users.hasMany(models.Projects, {foreignKey: 'user_id', as: 'projects'}); // one user has many projects
        Users.hasMany(models.Tasks, {foreignKey: 'user_id', as: 'tasks'}); // one user has many tasks
    };
    return Users;
};