const mongoose = require('mongoose');

const Schema = mongoose.schema;

const produitSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
});

module.exports = mongoose.model(''Produit', produitSchema );
