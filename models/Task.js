const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        minLength: [2, `name can not be less than 3 characters.`],
        maxLength: [50, `name can not be more than 50 characters.`]
    },
    completed: {
        type: Boolean,
        default: false
    }
});



module.exports = mongoose.model('Task', taskSchema);