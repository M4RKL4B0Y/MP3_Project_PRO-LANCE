
const {
    DataTypes
} = require('sequelize');

module.exports = (sequelize) => {
    const additional_comment = sequelize.define('Comment', {
        comment: {
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
            }
        }
    }, {});

    Comment.assocaite = function(models) {
        Comment.belongsTo(model.User, {
            foreignKey: 'user_id'
        });
        Comment.belongsTo(models.Project, {
            foreignKey: 'project_id'
        });
    };

    return Comment;

};