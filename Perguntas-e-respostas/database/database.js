const Sequelize = require('sequelize');

const connection = new Sequelize('perguntasrespostas','root','mec228.3',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;