const task = require('../models/task');

module.exports.main = function(req,res){

    task.find({},function(err,task){
        if(err){
            console.log(err);
            return ;
        }
        return res.render('todo',{
            title: "TodoList",
            task: task
        });
    });
};

module.exports.delete = function(req,res){
    console.log("Shall I delete?");
    task.findByIdAndDelete(req.query.id,function(err){
        if(err){
            console.log("Error in delting the task");
            return ;
        }
        console.log("Successfully delted the task");
        return res.redirect('back');
    });
};
