const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Worknote = sequelize.define('Worknote', {
        worknote: {
            type: DataTypes.TEXT
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users', 
                key: 'id'
            }
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Project',
                key: 'id'
            }
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('NOW')
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('NOW')
        }
    }, {});

    Worknote.associate = function(models) {
        Worknote.belongsTo(models.User, {
            foreignKey: 'user_id'
        });
        Worknote.belongsTo(models.Project, {
            foreignKey: 'project_id'
        });
    };

    return Worknote;
};
