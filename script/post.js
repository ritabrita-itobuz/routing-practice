// app.post() Method Demo Example

// Importing the express module
const express = require('express');

// Initializing the express and port number
var app = express();
// Initializing the router from express
var router = express.Router();
var PORT = 3000;

// Creating a POST request
app.post('/api', (req, res) => {
   console.log("Method called is -- ", req.method)
   res.end("post done");
})

// App listening on the below port
app.listen(PORT, function(err){
   if (err) console.log(err);
   console.log("Server listening on PORT", PORT);
});