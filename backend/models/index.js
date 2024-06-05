const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class User extends Model {
      static associate(models) {
        // Define associations between models here.
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
      }
    }
    User.init({
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'User',
    });
    return User;
  };