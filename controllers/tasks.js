const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks)
    } catch (error) {
        res.status(500).send(error)
    }

};

const getTask = async (req, res) => {
    try {
        const taskId = req.params.id
        const task = await Task.findOne({ _id: taskId });
        if (!task) {
            return res.status(404).json({ message: `no task found with id: ${taskId}` });
        }
        res.json(task)
    } catch (error) {
        res.status(500).json(error);
    }
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json(error)
    }
};

const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        let task = await Task.findOneAndUpdate(
            { _id: taskId },
            req.body,
            {
                new: true,
                runValidators: true
            })

        if (!task) {
            return res.status(404).json({ message: `no task found with id: ${taskId}` });
        }

        res.json(task)


    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteTask = async (req, res) => {
    try {

        const taskId = req.params.id;
        console.log(taskId);
        let task = await Task.findOne({ _id: taskId })

        // console.log(task);
        if (!task) {
            return res.status(404).json({ message: `no task found with id: ${taskId}` });
        }

        const deletedTask = await Task.deleteOne(task);
        console.log(deletedTask);
        res.json({ task: null, message: 'success' })
    } catch (error) {
        res.status(500).json(error);
    }

};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}