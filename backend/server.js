require('dotenv').config();
console.log('Secret Key:', process.env.SECRET_KEY);

const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];

const authRoutes = require('./routes/authRoutes');
const projRoutes = require('./routes/projRoutes');
const taskRoutes = require('./routes/taskRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api/auth', authRoutes);
app.use('/api/projects', projRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api', commentRoutes);

app.use(express.static(path.join(__dirname, 'frontend/build')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});


const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = sequelize;
