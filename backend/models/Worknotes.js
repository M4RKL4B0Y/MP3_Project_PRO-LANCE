
const {
    DataTypes
} = require('sequelize');

module.exports = (sequelize) => {
    const Worknote = sequelize.define('Worknote', {
        note: {

            type: DataTypes.TEXT
        },
        freelacer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
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
            }
        }

    }, {});

    Worknote.associate = function(models) {
        Worknote.belongsTo(model.Users, {
            foreignKey: 'freelancer_id'
        });
        Worknote.belongsTo(models.Project, {
            foreignKey: 'project_id'
        });
        Worknote.belongsTo(models.Tasks)

    };
    return Worknote;
};