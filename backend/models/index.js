'use strict';

const fs = require('fs'); 
const path = require('path'); 
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname + '../config/database'))[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs 
    .readdirSync(__dirname) //reads the directory contents where this script is located. 
    .filter(file => { 
        // Use the filter method to create an array with files that meet the following conditions:
        return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });
    

    Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
            db[model.name].associate(db);
        }
    });