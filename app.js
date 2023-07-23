const express = require('express');


const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

const routes = require('./routes/user');

app.use(express.json());

app.use('/', routes); 




app.listen(3000);