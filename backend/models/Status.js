const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const Role = sequelize.define('Status', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    Status.associate = function(models) {
        Status.hasMany(models.Project, { foreinKey: 'status_id', as: 'projects'});

    };

    return Role;
}