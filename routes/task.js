const express=require('express')
const router=express.Router()
const taskController=require('../controllers/taskController')

router.post('/', taskController.createNewTask)
router.get('/', taskController.getAllTasks)
router.get('/:id', taskController.getTaskById)
router.put('/:id', taskController.updateTask)
router.delete('/:id', taskController.deleteTask)
router.patch('/:id', taskController.completedTask)

module.exports=router
