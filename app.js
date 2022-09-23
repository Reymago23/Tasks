const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello')
});

app.use('/api/v1/tasks', tasks)


// connecting to the db and starting the server
const port = 3000;

const start = async () => {
    try {
        // console.log(process);
        await connectDB(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
        app.listen(port, () => console.log(`Server started on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start();
