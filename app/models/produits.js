const mongoose = require('mongoose');

const produitsSchema = mongoose.Schema({
  nom: { type: String },
  prenom: { type: String },
});

module.exports = mongoose.model('Produit', produitsSchema, 'tousproduit');
