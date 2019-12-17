const express = require('express');
const bodyParser = require('body-parser');
const router = require('./lib/routers/Store');
const config = require('./config');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const server = app.listen(config.port, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Listening on port ${server.address().port}`);
});

process.on('SIGINT', () => {
  if (server.listening) {
    console.log('Attempting to exit gracefully.');
    server.close(() => {
      console.log('Server closed. Quitting.');
      process.exit();
    });
  }
});

module.exports = app;
