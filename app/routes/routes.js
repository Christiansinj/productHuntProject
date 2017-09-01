const express = require('express');
const product = require('./product');

const router = express.Router();


router.get('/', (request, response) => {
  response.render('produits/list');
});

router.use(product);
module.exports = router;
