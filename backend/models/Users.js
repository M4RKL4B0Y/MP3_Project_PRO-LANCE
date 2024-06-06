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
            allowNull: false
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        role: {
            type: DataTypes.ENUM('client', 'freelancer', 'admin'), 
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Users',
                key: 'id'
            }
        }

    }, {
        hooks: { // hooks used for encryption
            beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            },
            beforeUpdate: (user) => {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        }
    }
    );
    Users.associate = function(models) { 
        Users.hasMany(models.Projects, {foreignKey: 'user_id', as: 'projects'}); // one user has many projects
        Users.hasMany(models.Tasks, {foreignKey: 'user_id', as: 'tasks'}); // one user has many tasks
    };
    return Users;
};