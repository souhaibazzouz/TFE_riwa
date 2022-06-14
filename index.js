const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
const fileUpload = require("express-fileupload")
const multer = require("multer")


const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const SECRET = 'Souhaib-Riwa-SecretKey'

const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage })

app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.json());
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

app.use(fileUpload({ createParentPath: true }))

const db = mysql.createConnection({
    user: "souhaib",
    host: "as485579-001.eu.clouddb.ovh.net",
    password: "Gu4n0ch4ng432097",
    port: 35588,
    database: "riwa"
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



// ROUTES

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

app.post('/upload/file', (req, res) => {
    const date = req.body.date
    const name = req.body.name
    const filePDF = req.body.filePDF
    const compClub = req.body.compClub
    const cat = req.body.cat

    if (date !== '') {
        if (name !== '') {
            if (filePDF !== '') {
                if (cat !== '') {
                    db.query(
                        'INSERT INTO resultat (date, nom, filePDF, compClub) VALUE (?,?,?,?)',
                        [date, name, filePDF, compClub],
                        (err, result) => {
                            console.log(err);
                        }
                    );


                    db.query(
                        'INSERT INTO resultat_categorie (idResultat, idCategorie) VALUE (LAST_INSERT_ID(),?)',
                        [cat],
                        (err, result) => {
                            console.log(err);
                        }
                    );

                    res.json({ auth: true });

                } else {
                    res.json({ auth: false, message: "Veuillez choisir une catégorie" });
                }
            } else {
                res.json({ auth: false, message: "Veuillez entrer un URL valide" });
            }
        } else {
            res.json({ auth: false, message: "Veuillez entrer un nom" });
        }
    } else {
        res.json({ auth: false, message: "Veuillez entrer une date!!" });
    }
})

app.get('/import/file/:id', (req, res) => {
    const id = req.params.id
    db.query(
        `SELECT * FROM resultat INNER JOIN resultat_categorie ON resultat.idResultat = resultat_categorie.idResultat and resultat_categorie.idCategorie = ${id};`,
        (err, result) => {
            console.log(err)
            res.send(result)
        }
    );
})


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


app.listen(process.env.PORT || PORT, () => {
    console.log(`running on port ${PORT}`);
});