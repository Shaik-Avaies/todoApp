const express = require("express");

app.use(express.urlencoded());

//require database
const db = require('../config/mongoose');
const Task = require('../models/task');

module.exports.addTask = function(req,res){
    console.log("Adding Task....");
    // console.log(req.body);
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    },function(err,newTask){
        if(err){
            console.log("Error while creating the Task");
            return ;
        }
        console.log("New Task Created: ", newTask);
        return res.redirect('back');
    });
};