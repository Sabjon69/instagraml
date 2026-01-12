const express = require("express");
const path = require("path");
require("dotenv").config();
const db = require("./connection");

const app = express();

// Pour lire JSON si tu fais des POST
app.use(express.json());

// Servir le dossier public
app.use(express.static(path.join(__dirname, "public")));

// Page principale
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "vpageinsta.html"));
});

// Exemple de route test MySQL
app.get("/test-db", (req, res) => {
    db.query("SELECT NOW() AS time", (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result);
    });
});

// Port Railway
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Serveur lancé sur le port " + port);
});
