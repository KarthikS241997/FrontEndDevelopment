const exp = require('express');
const app = exp();

const { greet, greetMessage } = require('./product');

app.use(greet);
app.use(greetMessage);

app.get('/', (req, res) => {
    res.send("Get Method");
})
app.listen(4000);