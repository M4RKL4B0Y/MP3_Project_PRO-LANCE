require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD),
    port: process.env.DB_PORT,
});

client.connect()
    .then(() => {
        console.log('Connected successfully.');
        client.end();
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
