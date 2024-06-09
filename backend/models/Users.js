const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => { 

    const User = sequelize.define('User', {
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
                const salt = await bcrypt.genSaltSync();
                user.password = await bcrypt.hashSync(user.password, salt); //use 'await' for 'bcryot.genSalt' and 'bcrypt.hash' to ensure completion before moving forward 
            },
            beforeUpdate: async (user) => {
                if (user.changed('password')) {
                const salt = await bcrypt.genSaltSync();
                user.password = await bcrypt.hashSync(user.password, salt);
            }
        }
    }
});

    User.associate = function(models) { 
        User.hasMany(models.Project, {foreignKey: 'user_id', as: 'projects'}); // one user has many projects
        User.hasMany(models.Task, {foreignKey: 'user_id', as: 'tasks'}); // one user has many tasks
    };
    return User;
};