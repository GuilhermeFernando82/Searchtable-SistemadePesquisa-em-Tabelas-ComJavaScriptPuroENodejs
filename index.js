const express = require('express');
const message = require('./database/msge');

const app = express()

const bodyParser = require('body-parser');
const { render } = require('ejs');
const { json } = require('body-parser');
const { and } = require('sequelize');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs') 


app.listen(8080, '192.168.15.13', function(err){
    if(err){
        console.log('Falha')
    }else{
        console.log('rodando')
    }
})
app.post('/create', (req,res)=>{
    var name = req.body.name
    var desc = req.body.desc
    message.create({
        name: name,
        desc: desc
    }).then(()=>{return res.redirect('/index')}).catch(()=>{
        res.send('Falha ao enviar')
    })
})


app.get('/index', (req, res) =>{
    message.findAll().then((result) =>{
        if(result != undefined){
            res.render('index',{
                result: result
            })
        }else{
            res.send('Not found')
        }
    })
})
