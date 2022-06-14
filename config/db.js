const mysql = require("mysql")

const db = mysql.createConnection({
    user: "souhaib",
    host: "as485579-001.eu.clouddb.ovh.net",
    password: "Gu4n0ch4ng432097",
    port: 35588,
    database: "riwa"
});

module.exports = db;