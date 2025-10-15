const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

// Middleware pour parser le JSON
app.use(express.json());

// Route d'accueil (optionnelle, pour éviter "Cannot GET /")
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenue sur l’API ToDoList 🎯',
    routes_disponibles: {
      afficher_les_taches: 'GET /tasks',
      ajouter_une_tache: 'POST /tasks',
      supprimer_une_tache: 'DELETE /tasks/:id'
    }
  });
});

// Utilisation des routes de tâches
app.use('/tasks', taskRoutes);

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
