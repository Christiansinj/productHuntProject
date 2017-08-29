const express = require('express');

const app = express();

app.get('/', (request,response) => {
	response.send('Bonjour Christian');
});

app.listen(3000, () => {console.log('Tes bien sur le port 3000!')});