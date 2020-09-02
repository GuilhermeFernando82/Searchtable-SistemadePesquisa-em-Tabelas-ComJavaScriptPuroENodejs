const sequeLize = require('sequelize');

const connection = require('./conexao');


const text = connection.define('shearchitem',{
    name:{
        type: sequeLize.STRING,
        allowNull: false,
    },
    desc:{
        type: sequeLize.TEXT,
        allowNull: false,
    }

})
text.sync({force:false}).then(()=>{console.log('Tabela criada')}).catch(()=>{console.log('Falha')})
module.exports = text