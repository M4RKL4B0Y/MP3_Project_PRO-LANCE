module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
<<<<<<< HEAD
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
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
            allowNull: false
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Statuses',
                key: 'id'
            }
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        estimate_id: {
            type: DataTypes.INTEGER,
            allowNull: false
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
                model: 'TaskType',
                key: 'id'
            }
        },
        profile_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Profiles',
                key: 'id'
            } 
=======
      title: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
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
      status_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Statuses',
          key: 'id'
>>>>>>> 2cbf268ff8565b8c1da04b8db0268998fe5e6059
        }
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
          model: 'TaskType',
          key: 'id'
        }
      },
      profile_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Profiles',
          key: 'id'
        } 
      }
    }, {});
  
    // Associations
    Project.associate = function(models) { 
<<<<<<< HEAD
        Project.belongsTo(models.User, { foreignKey: 'client_id', as: 'client' });
        Project.belongsTo(models.User, { foreignKey: 'freelancer_id', as: 'freelancer' });
        Project.hasMany(models.Estimate, { foreignKey: 'project_id', as: 'estimates' });
        Project.hasMany(models.Invoice, { foreignKey: 'project_id', as: 'invoices' });
        Project.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status' });
        Project.belongsTo(models.TaskType, { foreignKey: 'type_id:', as: 'type' });
=======
      Project.belongsTo(models.User, { foreignKey: 'client_id', as: 'client' });
      Project.belongsTo(models.User, { foreignKey: 'freelancer_id', as: 'freelancer' });
      Project.hasMany(models.Estimate, { foreignKey: 'project_id', as: 'estimates' });
      Project.hasMany(models.Invoice, { foreignKey: 'project_id', as: 'invoices' });
      Project.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status' });
      Project.belongsTo(models.TaskType, { foreignKey: 'type_id', as: 'type' });
      Project.belongsTo(models.Profile, { foreignKey: 'profile_id', as: 'profile' });
>>>>>>> 2cbf268ff8565b8c1da04b8db0268998fe5e6059
    };
  
    return Project;
  };
  