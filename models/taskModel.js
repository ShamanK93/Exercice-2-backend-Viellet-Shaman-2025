const mongoose = require('mongoose');

// Définition du schéma de tâche
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

// Création du modèle
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
