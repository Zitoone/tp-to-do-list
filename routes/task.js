const express=require('express')
const router=express.Router()
const taskController=require('../controllers/taskController')

router.post('/', taskController.createNewTask)
router.get('/', taskController.getAllTasks)
router.get('/:id', taskController.getTaskById)

module.exports=router


//Méthode	Endpoint	Description
//GET	/api/tasks	Récupère toutes les tâches
//GET	/api/tasks/:id	Récupère une tâche par ID
//POST	/api/tasks	Crée une nouvelle tâche
//PUT	/api/tasks/:id	Met à jour une tâche
//DELETE	/api/tasks/:id	Supprime une tâche