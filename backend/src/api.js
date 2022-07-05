const express = require('express');

const app = express();

app.use(express.json());

// Exportar necessário de `app`, para que possa ser utilizada no arquivo `src/server.js`
module.exports = app;
