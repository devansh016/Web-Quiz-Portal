const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./util/database');

const app = express();
const port = process.env.port || 80;
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', (req, res, next) =>{
    res.send('hello world');
})

mongoConnect((client)=>{
    app.listen(port);
    console.log("Server listening on port "+ port);
});