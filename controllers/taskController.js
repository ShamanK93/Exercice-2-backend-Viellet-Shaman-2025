const Task = require('../models/taskModel');

exports.getTasks = (req, res) => {
  res.json(Task.getAllTasks());
};

exports.addTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Titre requis' });
  const newTask = Task.addTask(title);
  res.status(201).json(newTask);
};

exports.removeTask = (req, res) => {
  const id = parseInt(req.params.id);
  Task.removeTask(id);
  res.json({ message: `Tâche ${id} supprimée` });
};
