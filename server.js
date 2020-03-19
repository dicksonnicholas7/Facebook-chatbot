'use strict'

const express = require('express');
const bodyparser = require('body-parser');
const request = require('request');

const app = express();
const port = 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.get('/', function (req, res) {
    res.send('Chatbot')
})

app.get('/webhook/', function (req, res) {
    if(req.query['hub.verify_token'] === "myChatBot"){
        res.send(req.query['hub.challenge'])
    }else{
        res.send('wrong token')
    }
})


app.listen(port, function () {
  console.log('server started on port : ' + port)  
})