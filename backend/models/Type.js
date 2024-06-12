const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const TaskType = sequelize.define('TaskType', {
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {});


    TaskType.associate = function(models) {
        TaskType.hasMany(models.Task, { foreignKey: 'type_id', as: 'tasks' });
        TaskType.hasMany(models.Project, { foreignKey: 'type_id', as: 'Projects' });
};

return TaskType;

};