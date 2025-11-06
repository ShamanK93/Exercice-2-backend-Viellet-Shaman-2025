const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connecté à MongoDB'))
.catch((err) => console.error('Erreur de connexion MongoDB :', err));

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
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
