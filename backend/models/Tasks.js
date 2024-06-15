const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startDate: { 
            type: DataTypes.DATE,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        estimate: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Users', 
                key: 'id' 
            }
        },
        estimate_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        freelancer_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Users', 
                key: 'id' 
            }
        },
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
<<<<<<< HEAD
                model: 'TaskType',
                key: 'id'
            }
=======
                model: 'Tasks',
                key: 'id'
            }
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: 'Statuses',
              key: 'id'
            }
>>>>>>> 2cbf268ff8565b8c1da04b8db0268998fe5e6059
        }

    }, {});

    // Associations
    Task.associate = function(models) { 
        Task.belongsTo(models.User, { foreignKey: 'client_id', as: 'client' });
        Task.belongsTo(models.User, { foreignKey: 'freelancer_id', as: 'freelancer' });  
        Task.hasMany(models.TaskType, { foreignKey: 'type_id', as: 'type' });
        Task.hasMany(models.Estimate, { foreignKey: 'task_id', as: 'estimates' });
        Task.hasMany(models.Invoice, { foreignKey: 'task_id', as: 'invoices' });
        
    };

    return Task;
};
