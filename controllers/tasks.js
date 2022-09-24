const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find();
    res.send({ tasks })
});

const getTask = asyncWrapper(async (req, res, next) => {
    const taskId = req.params.id
    const task = await Task.findOne({ _id: taskId });
    if (!task) return next(createCustomError(`No task with id: ${taskId} found.`, 404))
    res.json({ task })
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

const updateTask = asyncWrapper(async (req, res, next) => {
    const taskId = req.params.id;
    let task = await Task.findOneAndUpdate({ _id: taskId }, req.body, { new: true, runValidators: true })
    if (!task) return next(createCustomError(`No task with id: ${taskId} found.`, 404))
    res.json({ task })
})

const deleteTask = asyncWrapper(async (req, res, next) => {
    const taskId = req.params.id;
    let task = await Task.findOne({ _id: taskId })
    if (!task) return next(createCustomError(`No task with id: ${taskId} found.`, 404))
    const deletedTask = await Task.deleteOne(task);
    console.log(deletedTask);
    res.json({ task: null, message: 'success' })

})

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}