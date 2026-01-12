const express = require("express");
const app = express();
require("dotenv").config();

const loginRoute = require("./routes/login");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/vpageinsta.html");
});

app.post("/login", loginRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Serveur lancé sur le port " + PORT);
});
