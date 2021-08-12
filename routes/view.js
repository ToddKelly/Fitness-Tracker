const router = require('express').Router();
const path = require('path');

//Connects the / route to the ../public/index.html
router.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/index.html"));;
});
//Connects the /exercise to ../public/exercise.html
router.get("/exercise", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"));;
});
//Connects the /stats to the ../public/stats.html
router.get("/stats", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/stats.html"));;
});

module.exports = router;