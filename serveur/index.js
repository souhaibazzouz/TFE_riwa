const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const SECRET = 'Souhaib-Riwa-SecretKey'

const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: "userID",
        secret: 'subscribe',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
)

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "tfe_riwa"
});
const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]

    if (!token) {
        res.send("On a pas de token, tu dois nous le donner!");
    } else {
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "Tu n'as pas été authentifié" });
            } else {
                req.userID = decoded.id;
                next();
            }
        })
    }
}

app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }

        db.query(
            'INSERT INTO admin (username, password) VALUE (?,?)',
            [username, hash],
            (err, result) => {
                console.log(err);
            }
        );
    });
});


app.get('/isUserAuth', verifyJWT, (req, res) => {
    res.send({ auth: true })
})

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query(
        'SELECT * FROM admin WHERE username = ?;',
        username,
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        const id = result[0].id
                        const token = jwt.sign({ id }, SECRET, {
                            expiresIn: 1800,
                        })
                        req.session.user = result;

                        res.json({ auth: true, token: token, result: result });
                    } else {
                        res.json({ auth: false, message: "Veuillez entrer le bon mot de passe!" });
                    }
                });
            } else {
                res.json({ auth: false, message: "Cet utilisateur n'existe pas" });
            }
        })
})


app.listen(3001, () => {
    console.log("running on port 3001");
});