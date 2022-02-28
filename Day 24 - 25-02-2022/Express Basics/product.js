const exp = require('express');

const greet = (req, res, next) => {
    console.log("Welcome");
    console.log("Requested method is ",req.method);
    next();
}

const greetMessage = () => {
    console.log("Greet Message");
}

module.exports = { greet, greetMessage };