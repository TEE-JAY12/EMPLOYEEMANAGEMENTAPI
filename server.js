// const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
//const mysqlConnection = require("./connection");
const PeopleRoute = require("./route/people");

const Employee = require("./route/employee");

var app = express();

app.use(bodyParser.json());

// All the routes coming from the /people is redirectde to the 
// route package  
app.use("/people",PeopleRoute);

app.use("/api",Employee);



app.listen(3000);
