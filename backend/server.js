const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const path = require('path');
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];
const authRoutes = require('./routes/authRoutes');
const projRoutes = require('./routes/projRoutes');
const taskRoutes = require('./routes/taskRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ['http://localhost:5173', 'http://prolance-env.eba-npewa8kd.us-east-1.elasticbeanstalk.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use('/api/auth', authRoutes);
app.use('/api/projects', projRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api', commentRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
    });
} else {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
}

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
