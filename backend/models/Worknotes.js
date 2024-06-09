
const {
    DataTypes
} = require('sequelize');

module.exports = (sequelize) => {
    const additional_Worknote = sequelize.define('Worknote', {
        worknote: {
            type: DataTypes.TEXT
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refernces: {
                model: 'Project',
                key: 'id'
            }
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Project',
                key: 'id'
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: Sequelize.fn('NOW')
              },
              updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: Sequelize.fn('NOW')
              }
        }
    }, {});

    Worknote.assocaite = function(models) {
        Worknote.belongsTo(model.User, {
            foreignKey: 'user_id'
        });
        Worknote.belongsTo(models.Project, {
            foreignKey: 'project_id'
        });
    };

    return Worknote;

};