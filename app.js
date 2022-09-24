const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()

app.use(express.json())
app.use(express.static('./public'))

// routes
app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

// connecting to the db and starting the server
const port = process.env.PORT || 3000;

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
