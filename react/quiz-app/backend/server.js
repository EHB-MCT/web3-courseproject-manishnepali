



const fs = require('fs');
const path = require('path')
const express = require('express'); //Line 1
const app = express(); 
const port = process.env.PORT || 3000; //Line 3


app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/api', (req, res) => { //Line 9
  
  fs.writeFileSync("quiz.json", "hello" );
  res.send({ }); //Line 10
}); //Line 11
