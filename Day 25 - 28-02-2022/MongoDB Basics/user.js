const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome user");
});

router.get('/1', (req, res) => {
    res.send("Welcome User 1");
});

router.get('/2', (req, res) => {
    res.send("Welcome User 2");
});

module.exports = router;