const express = require('express');

const router = express.Router();

router.get('/gean', (_request, response) => {
  response.send('hello world');
});

module.exports = router;