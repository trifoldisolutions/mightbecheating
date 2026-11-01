const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: { type: String, enum: ['todo', 'in-progress', 'done'], default: 'todo' }
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);