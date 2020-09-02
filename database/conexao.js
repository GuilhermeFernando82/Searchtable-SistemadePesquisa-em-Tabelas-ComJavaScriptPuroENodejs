const squeLize = require('sequelize');

const conect = new squeLize('chat','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conect;