require('dotenv').config();
const express = require('express');
const cors = require('cors'); /// allows the server to accept requests from different origins than its own.
const { Sequelize } = require('sequelize');
const dbase = require('./models');
const authRoutes = require('./routes/authRoutes');
const planceRoutes = require('./routes/projRoutes');


const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); 
app.use(express.urlencoded({ extended: true}));

const projectRoutes = require('./routes/Projects');
const taskRoutes = require('./routes/taskRoutes')

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes)



const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connected successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});