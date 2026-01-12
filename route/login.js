const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.post("/", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Champs manquants");
    }

    const sql = "INSERT INTO utilisateurs (username, password) VALUES (?, ?)";

    db.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error("Erreur SQL :", err);
            return res.status(500).send("Erreur serveur");
        }

        console.log("Données enregistrées :", result.insertId);
        res.redirect("/merci.html");
    });
});

module.exports = router;
