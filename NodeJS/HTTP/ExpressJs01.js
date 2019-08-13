const express = require('express');
const {MongoClient, ObjectId} = require('mongodb');
const url = "mongodb://localhost:27017"
const {getEmployeeById} = require("../services/mongo-emps-service")


const app = express();

app.get("/", (req, res) => {

    // res.send("Hello Mayur!");
    
})

app.get("/example", (req,res) => {
    res.send("Example Route called...");
})

//to show path param
app.get("/example/:name/:age",(req,res) => {
    //https://localhost:3000/example/Mayur/29
    console.log("--------------------------");
    console.log("Name: " + req.params.name);
    console.log("Age: " + req.params.age);
    console.log("--------------------------");
    

    console.log(req.query);
    //to invoke query params
    //    //https://localhost:3000/example?city=Bengaluru&state=karnataka
    
    res.send("State " + req.query.state)

    
})
app.listen(3000)