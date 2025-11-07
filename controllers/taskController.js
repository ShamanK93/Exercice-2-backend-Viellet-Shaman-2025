const Task = require('../models/taskModel');

// 📄 Récupérer toutes les tâches
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des tâches' });
  }
};

// ➕ Ajouter une tâche
exports.addTask = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Titre requis' });

    const newTask = new Task({ title });
    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l’ajout de la tâche' });
  }
};

// ❌ Supprimer une tâche
exports.removeTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) return res.status(404).json({ error: 'Tâche introuvable' });

    res.json({ message: `Tâche ${id} supprimée avec succès` });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de la tâche' });
  }
};
