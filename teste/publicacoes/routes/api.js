const express = require('express')
const router = express.Router()

var Pubs = require('../controllers/pubs')


router.get('/pubs', function (req, res) {
  if(req.query.type && req.query.year){
    Pubs.filtrarTypeYear(req.query.type,req.query.year)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  else if (req.query.type) {
    Pubs.filtrarType(req.query.type)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  } 
  else if(req.query.autor) {
    Pubs.filtrarAutor(req.query.autor)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
  else {
    Pubs.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))

  }
})

router.get('/pubs/:idPub', function (req, res) {
  Pubs.consultar(req.params.idPub)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
})

router.get('/types', function (req, res) {
  Pubs.listarTypes()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
})

router.get('/autores', function (req, res) {
  Pubs.listarAutores()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
})


module.exports = router