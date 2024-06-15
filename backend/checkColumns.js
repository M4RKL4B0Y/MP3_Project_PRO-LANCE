const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
});

async function checkColumns() {
    try {
        const [results, metadata] = await sequelize.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'Users'");
        console.log(results);
    } catch (error) {
        console.error('Error fetching columns:', error);
    } finally {
        await sequelize.close();
    }
}

checkColumns();
