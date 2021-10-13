
const express = require('express');
const app = express();
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');
const cors = require("cors");



// connect met mongodb
const MongoClient= require('mongodb').MongoClient;

const { ObjectID } = require('bson'); //BSON is just binary JSON (a superset of JSON with some more data types, most importantly binary byte array)
const { json } = require('body-parser');
const { nextTick } = require('process');
const url = "mongodb+srv://admin:admin@cluster0.p8l9p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const DB_WERKSTUK = "werkstuk"
const client = new MongoClient(url, {useNewURLParser: true});


//middleware
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  //cors gebruiken om toegant te verlenen voor de mongodb api
  app.use(cors());



//espress router
const wRouter = express.Router(); //class which helps us to create router handlers
const port = process.env.PORT || 3000; //zodat het ofwel local host of een andere url kan gebruiken

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'routes.html'));
})