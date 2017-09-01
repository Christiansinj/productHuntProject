const express = require('express');

const router = express.Router();
const Produit = require('../models/produits');

router.get('/list', (request, response) => {
  Produit.find({}, (error, produits) => {
    if (error) {
      response.send(error);
    }
    response.render('produits/list', { produits });
  });
});

router.get('/add', (request, response) => {
	response.render('produits/add');
})

router.post('/add', (request, response) => {
  const produit = new Produit(request.body);
  produit.save((error) => {
  	if (error){
  		response.send(error);
  	}
  	response.redirect('/list');
  });
});

/*router.get('/new', (request, response) => {
  response.render('produits/new');
});*/

module.exports = router;