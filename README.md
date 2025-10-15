# API ToDoList - Exercice 2 Backend

Une API simple pour gérer des tâches (ToDoList) avec **Express** en Node.js, en suivant une architecture **MVC**.

---

## Structure du projet

Exercice-2-backend-Viellet-Shaman-2025/
│
├── server.js # Point d'entrée du serveur
├── controllers/
│ └── taskController.js # Logique des routes
├── models/
│ └── taskModel.js # Gestion des données en mémoire
├── routes/
│ └── taskRoutes.js # Définition des routes
└── package.json # Configuration du projet


---

## Installation

1. Cloner le projet :

```bash
git clone https://github.com/ShamanK93/Exercice-2-backend-Viellet-Shaman-2025.git
cd Exercice-2-backend-Viellet-Shaman-2025

npm install
npm run dev

Le serveur écoute sur : http://localhost:3000

| Méthode | URL          | Description                |
| ------- | ------------ | -------------------------- |
| GET     | `/tasks`     | Afficher toutes les tâches |
| POST    | `/tasks`     | Ajouter une tâche          |
| DELETE  | `/tasks/:id` | Supprimer une tâche        |


Tester avec Postman
1️. Ajouter une tâche

Méthode : POST

URL : http://localhost:3000/tasks

Body → raw → JSON :