const express = require('express');
const bodyparser = require('body-parser')
const {MongoClient, ObjectId} = require('mongodb');
const url = "mongodb://localhost:27017"
const {getEmployeeById,getSortedRecords,addNewEmp,updateNewEmp,deleteEmp} = require("../services/mongo-emps-service")
const id = "5d43cd30a6d183f707172497"

const app = express();

app.use(bodyparser.json());
app.get("/employee/:id", (req, res) => {
    
    getEmployeeById(req.params.id)
    .then(data => res.send(data))
    .catch(err => console.log(err))
    
})

app.get("/employee", (req,res) => {
    
    getSortedRecords()
    .then(data => res.send(data))
    .catch(err => console.log(err))
    
})

app.post("/employee", (req,res) => {
    
    addNewEmp(req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

app.delete("/employee/:id", (req,res) => {
    deleteEmp(req.params.id)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

app.post("/employee/update/:id",(req,res) => {
    
    updateNewEmp(req.params.id,req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})
//to show path param
// app.get("/example/:name/:age",(req,res) => {
    //     //https://localhost:3000/example/Mayur/29
    //     console.log("--------------------------");
    //     console.log("Name: " + req.params.name);
    //     console.log("Age: " + req.params.age);
    //     console.log("--------------------------");
    
    
    //     console.log(req.query);
    //     //to invoke query params
    //     //    //https://localhost:3000/example?city=Bengaluru&state=karnataka
    
    //     res.send("State " + req.query.state)
    
    
    // })
    
app.listen(3000)