const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define('Status', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    Status.associate = function(models) {
        Status.hasMany(models.Project, { foreignKey: 'status_id', as: 'projects' });
    };

    return Status;
};
