const bcrypt = require('bcryptjs');
const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => { 
    const User = sequelize.define('User', {
        name: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        freelancer_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role_id: {
            type: DataTypes.ENUM('client', 'freelancer', 'admin'),
            allowNull: false
        }
    }, {
        hooks: {
            beforeCreate: async (user) => {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            },
            beforeUpdate: async (user) => {
                if (user.changed('password')) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            }
        }
    });

    User.associate = function(models) {
        User.hasMany(models.Project, { foreignKey: 'client_id', as: 'clientProjects' });
        User.hasMany(models.Project, { foreignKey: 'freelancer_id', as: 'freelancerProjects' });
        User.hasMany(models.Task, { foreignKey: 'client_id', as: 'clientTasks' });
        User.hasMany(models.Task, { foreignKey: 'freelancer_id', as: 'freelancerTasks' });
    };

    return User;
};
