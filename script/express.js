var express = require('express');
var app= express();

const port = 8081;
app.get('/', function(req, res) {
    res.send("hello world");
    console.log("hello world");// second 
})

app.post ('/', function(req, res) {
    console.log("post");
    res.send("post request done");
})
app.listen(port, ()=> {
    console.log(`listening to the the port ${port}`); // first this will be shown 
})