
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

//routes, als de node app.js gestart wordt wordt rotues.html weergegeven
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'routes.html'));
  });

  //api 
  
  wRouter.route('/myworkouts') 
  //de ontvangen gegevens van frontend worden geplaats in mongodb
  .post((res, req)=>{
    collection = db.collection("workout");
    collection.insertOne(req.body).then(()=>{
        res.status(200).json({
            message: 'added'
        }).catch((error)=>(
            res.status(400).json({
            error: error
            })
        ));
    })
  })
  //de data van mongo wordt ontvangen
  .get((req, res)=>{
  collection = db.collection("workout");
  collection.find({}).toArray((error, result) =>{
    if(error){
      return res.status(500).send(error);
    }
    res.json(result);
  })
   
  })
  //geselecteerde objectid wordt verwijderd van database
  .delete((req,res)=>{
    collection = db.collection("workout");
    collection.deleteOne({
        "_id": ObjectID(req.body._id) 
    }).then(
        () => {
          res.status(200).json({
            message: 'Deleted!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
})

.patch((req,res)=>{
  collection = db.collection("workout");
  try {const updatepost = collection.updateById({
      "_id": ObjectID(req.body._id),
      $set: { name: req.body.name,
      description: req.body.description}
  });
  res.json(updatepost)
} catch (err){
res.json({message: err})
}
})





  //krijg data van mongodb
app.use('/api', wRouter);
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    client.connect(err =>{
      if(err){
      throw err;
    }
    db = client.db(DB_WERKSTUK);
  });

  });
//post new gegevens inn api (had eerst perongeluk verwijderd)
wRouter.route('/mynewworkouts')
.post((req, res) => {
    collection = db.collection("workout");
    collection.insertOne(req.body).then(
      () => {
        res.status(200).json({
          message: 'Added!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      });
  })

 



