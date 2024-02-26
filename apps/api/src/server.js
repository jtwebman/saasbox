const express = require('express');
const logger = require('pino')();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello JT!');
});

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});
