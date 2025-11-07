const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/todolist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch((err) => console.error("❌ Erreur de connexion MongoDB :", err));

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API ToDoList",
      version: "1.0.0",
      description:
        "Une API simple de gestion de tâches (ToDoList) réalisée avec Express.js et MongoDB",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Serveur local",
      },
    ],
  },
  apis: ["./routes/*.js"], // Documentation générée depuis les routes
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Route d’accueil
app.get("/", (req, res) => {
  res.json({
    message: "Bienvenue sur l’API ToDoList 🎯",
    documentation: "http://localhost:3000/api-docs",
    routes_disponibles: {
      afficher_les_taches: "GET /tasks",
      ajouter_une_tache: "POST /tasks",
      supprimer_une_tache: "DELETE /tasks/:id",
    },
  });
});

// Routes des tâches
app.use("/tasks", taskRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Serveur démarré sur http://localhost:${PORT}`)
);
