const Task = require('../models/task')

exports.createNewTask = async(req,res)=>{
    const task=new Task({
        title: req.body.title,
        description: req.body.description
    })
        try{
            const newTask=await task.save()
            res.status(201).json(newTask)
        }catch(err){
            res.status(400).json({message: err.message})
        }
}

exports.getAllTasks=async(req,res)=>{
    try{
        const tasks=await Task.find()
        res.json(tasks)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.getTaskById=async(req,res)=>{
    try{
        const task=await Task.findById(req.params.id)
        if(task == null){
            res.status(404).json({message: "Tâche non trouvée"})
        }
        res.json(task)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}