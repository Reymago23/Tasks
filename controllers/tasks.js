const getAllTasks = (req, res) => {
    res.send('all tasks Yeah!')
};

const getTask = (req, res) => {
    res.json({ id: req.params.id })
};

const createTask = (req, res) => {
    res.json(req.body)
};

const updateTask = (req, res) => {
    res.json(req.body)
};

const deleteTask = (req, res) => {
    res.json({ id: req.params.id })
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}