require('dotenv').config();
const app = require('./api');
const router = require('./router');

const port = process.env.API_PORT || 3000;

app.get('/', (_request, response) => {
  response.send();
});

app.use(router);

app.listen(port, () => console.log(`ouvindo porta ${port}`));
