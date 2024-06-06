'use strict'
// Import the DataTypes object from 'sequelize' package.
// DataTypes will be used to define the data types for model attributes.
const { DataTypes } =require('sequelize'); 

module.exports = (sequelize) => {
    const additional_comment = sequelize.define('Comment', {
    content: {
        type: DataTypes.TEXT
    },
user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    refernces: {
        model: 'Projects',
        key: 'id'
    }
},
project_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'Projects',
        key: 'id'
    }
}
    }, {});

    Comment.assocaite = function(models) {
        Comment.belongsTo(model.User, { foreignKey: 'user_id'});
        Comment.belongsTo(models.Project, { foreignKey: 'project_id'});
    };

    return Comment;

};