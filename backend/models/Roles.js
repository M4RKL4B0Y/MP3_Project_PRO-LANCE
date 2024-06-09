const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Role = sequelize.define('Role', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    Role.associate = function(models) {
        Role.hasMany(models.User, { foreignKey: 'role.id' });
    };

    return  Role;
}