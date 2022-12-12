const express = require('express')
const app = express()
const tasks = require('./public/routes/tasks')
const test = require('./public/routes/test')

const connectDB = require('./public/db/connect')


// middleware
app.use(express.json())


// routes
app.get('/hello', (req, res)=>{
    res.send('Task Manager ')
})


app.use('image.png', test)
app.use('/api/v1/tasks', tasks)
// app.get('/api/v1/tasks')         - get all tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - update task
// app.delete('/api/v1/tasks/:id')  - delete task

const port = 3000 

const start = async () => {
    try{
        await connectDB()
        app.listen(port, console.log(`Server is running on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()



