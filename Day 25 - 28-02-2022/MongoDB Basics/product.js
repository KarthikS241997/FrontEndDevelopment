const exp = require('express');
const router = exp.Router();

router.get('/', (req, res) => {
    res.send("This is the product page");
});

router.get('/product-details', (req, res) => {
    res.send("This is the product detail page");
});

module.exports = router;