const express = require("express");
const mongoose = require("mongoose");

const Weighing = require("./models/weighing");

const weighingRoutes = require('./routes/weighings')
const userRoutes = require('./routes/users');

const app = express();

mongoose
  .connect(
    "mongodb+srv://mobile-app:bRwMWIaVKfWly7pl@cluster0.06mg0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/weighings', weighingRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
