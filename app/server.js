const express = require('express');
const router = require('./routes/routes');
const path = require('path');

const app = express();
// Afficher un messages sur le navigateur

app.get('/', (request, response) => {
  response.send('Bonjour Christian');
});

app.use(router);

// ce qui me permet de voir est d'utiliser un fichier pug ou autre

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ecouter le port 3000 sur le serveur

app.listen(3000, () => {
  console.log('Tes bien sur le port 3000!');
});
