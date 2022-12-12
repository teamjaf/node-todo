const { request } = require("express")


const getAllTasks = (req, res) =>{
    res.send('getting all the tasks')
}


const createTask = ((req, res) => {
    res.json({id: req.params.id})
})

const getTask = ((req, res) => {
    res.send('get a single task')
})

const updateTask = ((req, res) => {
    res.send('update a task')
})

const deleteTask = ((req, res) => {
    res.send('delete a task')
})


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask     
}