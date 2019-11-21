var express = require('express');
var router = express.Router();
var axios = require('axios')
var lhost = require('../config/env').host

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(lhost + '/api/ficheiros')
    .then(dados => {
      res.render('index', { lista: dados.data });
    })
    .catch(erro => {
      res.render('erro', {error: erro})
    })
});

module.exports = router;
