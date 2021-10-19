const fs = require("fs");
let db = require("../db/db.json");
var router = require("express").Router();

router.get("/notes", (req, res) => {
    db = JSON.parse(fs.readFile("./db/db.json", "utf-8"))
    res.json(db)
})






module.exports = router