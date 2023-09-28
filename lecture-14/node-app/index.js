const express = require("express");
const app = express();
const sequelize = require("./sequelize");
const { Sequelize } = require("sequelize");

app.get("/api/test", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/users", (req, res) => {
    sequelize
        .query("SELECT * FROM students", {
            type: Sequelize.QueryTypes.SELECT,
        })
        .then((results) => {
            console.log(results);
            res.send(results);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
