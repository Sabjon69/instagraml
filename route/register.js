const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.post("/", (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).send("Champs manquants");
    }

    const sql = "INSERT INTO utilisateurs (username, email) VALUES (?, ?)";

    db.query(sql, [username, email], (err, result) => {
        if (err) {
            console.error("Erreur SQL :", err);
            return res.status(500).send("Erreur serveur");
        }

        console.log("Utilisateur enregistré :", result.insertId);
        res.redirect("/merci.html");
    });
});

module.exports = router;
