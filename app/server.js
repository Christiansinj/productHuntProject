const express = require('express');
const router = require('./routes/routes');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tousproduit', () => {
	console.log('je suis connecter a mongo')}
);


const app = express();
// Afficher un messages sur le navigateur



// loger (morgan)

app.use(logger('tiny'));
// requpérer les donner du formulaire 

app.use(bodyParser.urlencoded({ extended: true }));
// ce qui me permet de voir est d'utiliser un fichier pug ou autre

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// localisation des fichier public statiques

app.use(express.static(path.join(__dirname, 'public')));

// import du routeur
app.use(router);

// ecouter le port 3000 sur le serveur

app.listen(3000, () => {
  console.log('Tes bien sur le port 3000!');
});
