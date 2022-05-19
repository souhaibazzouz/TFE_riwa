const express = require('express');
const mysql = require('mysql');


const app = express();

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "tfe_riwa"
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello Souhaïb");
});

app.listen(3001, () => {
    console.log("running on port 3001");
});