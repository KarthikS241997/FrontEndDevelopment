const exp = require('express');
const app = exp();
// const products = require('./product');

// const user = require('./user');
// app.use(greet);
// app.use(greetMessage);
// app.use('/product', products);

// app.use('/user', user);

app.use(exp.static('Public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname);
    // res.send("Get Method");
})
app.listen(4000);