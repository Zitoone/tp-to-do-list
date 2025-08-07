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

exports.updateTask=async(req,res)=>{
    try{
        const task=await Task.findById(req.params.id)
        if(task == null){
        res.status(404).json({message: "Tâche non trouvée"})
        }
        if(req.body.title != null){
            task.title=req.body.title
        }
        if(req.body.description != null){
        task.description=req.body.description
        }
        if(req.body.completed != true){
        task.completed=req.body.completed
        }
        const updateTask=await task.save()
        res.json(updateTask)

    }catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.deleteTask=async(req,res)=>{
    try{
        const task=await Task.findById(req.params.id)
        if(task==null){
            res.status(404).json({message: "Tâche non trouvée"})
        }
        await task.deleteOne()
        res.json({message: "La tâche a été supprimé"})

    }catch(err){
        res.status(500).json({message: err.message})

    }
}

exports.completedTask=async(req,res)=>{
    try{
        const task=await Task.findById(req.params.id)
        if(task==null){
            res.status(404).json({message: "Tâche non trouvée"})
        }
        task.completed = !task.completed
        await task.save()
        res.status(200).json(task)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}