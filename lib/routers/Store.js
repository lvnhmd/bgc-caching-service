const express = require('express');

const router = express.Router();
const HttpStatus = require('http-status-codes');

const { error } = require('../error-handler');
const { createEntry, getEntryByKey } = require('../models/Store');

router.post('/entry', (req, res) => {
  const {
    key, value,
  } = req.body;

  Promise.resolve(createEntry(key, value).then(() => {
    res.status(HttpStatus.CREATED).send();
  }).catch((err) => error(err)));
});

router.get('/entry/:key', (req, res) => {
  const { key } = req.params;
  Promise.resolve(getEntryByKey(key).then((data) => {
    res.json(data).send();
  }).catch((err) => error(err)));
});

module.exports = router;
