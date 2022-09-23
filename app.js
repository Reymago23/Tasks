const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello')
});

app.use('/api/v1/tasks', tasks)

