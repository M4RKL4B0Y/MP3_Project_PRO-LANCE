'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { sequelize, db } = require('.');

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
