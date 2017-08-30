const express = require('express');

const router = express.Router();


router.get('/produit', (request, response) => {
  response.render('list');
});

module.exports = router;
