const express = require('express');

module.exports = function(app, basepath) {
  const router = express.Router();

  router.get('/pets', function (req, res, next) {
    res.json({});
  })

  router.post('/pets', function (req, res, next) {
    res.json({});
  })

  router.get('/pets/:id', function (req, res, next) {
    res.json({});
  })

  router.delete('/pets/:id', function (req, res, next) {
    res.json({});
  })

  app.use(basepath, router);
}
