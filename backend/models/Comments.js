
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