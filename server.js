const fs = require('fs');
const path = require('path');

const { animals } = require('./data/animals');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// makes the css and other htmls usable
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// this is where functions were, now they are in lib/animals.js

// this is where animal routes were, now they are in routes/apiRoutes/animalRoutes.js

// this is where html routes were, now the ate in routes/htmlRoutes/index.js

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});