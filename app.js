const express=require('express')
const app=express()
require('dotenv').config()
const port=process.env.PORT
require('./db')

app.use(express.json())

const tasksRoutes=require('./routes/task')
app.use('/api/tasks', tasksRoutes)

app.get('/',(req, res)=>{
    console.log("tata")
    return res.send("To Do List")
})

app.listen(port, ()=>{
    console.log("Serveur démarré sur http://localhost:",port)
})