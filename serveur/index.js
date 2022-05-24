const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "tfe_riwa"
});

app.post('/register', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    db.query(
        'INSERT INTO admin (username, password) VALUE (?,?)',
        [username, password],
        (err, result) => {
            console.log(err)
        })
})


app.post('/login', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    db.query(
        'SELECT * FROM admin WHERE username = ? AND password = ?',
        [username, password],
        (err, result) => {

            if (err) {
                res.send({ err: err })
            }
            else {
                if (result.length > 0) {
                    res.send(result)
                } else {
                    res.send({ message: "Veuillez entrer un nom d'utilisateur et un mot de passe valide!" });
                }
            }
        })
})



app.get('/', (req, res) => {
    res.send("Hello Souhaïb");
});

app.listen(3001, () => {
    console.log("running on port 3001");
});