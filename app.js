const express = require('express')
const app = express()
const tasks = require('./public/routes/tasks')
const test = require('./public/routes/test')


// middleware
app.use(express.json())


// routes
app.get('/hello', (req, res)=>{
    res.send('Task Manager ')
})


app.use('/api/v1/test', test)
app.use('/api/v1/tasks', tasks)
// app.get('/api/v1/tasks')         - get all tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - update task
// app.delete('/api/v1/tasks/:id')  - delete task

const port = 3000 

app.listen(port, console.log(`server is listening on port ${port},,`))