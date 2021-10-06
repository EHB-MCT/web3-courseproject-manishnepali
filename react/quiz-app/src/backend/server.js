const fs = require('fs');
const express = require('express'); //Line 1
const app = express(); 
const port = process.env.PORT || 3000; //Line 3


app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/api', (req, res) => { //Line 9
  
  fs.writeFileSync("../quiz_vragen.json", "hello world" )
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11
