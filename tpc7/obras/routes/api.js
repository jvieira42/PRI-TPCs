const express = require('express')
const router = express.Router()

var Obras = require('../controllers/obras')


/* GET: lista de obras */
router.get('/obras', function (req, res) {
    if (req.query.periodo) {
      Obras.filtrarPeriodo(req.query.periodo)
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.anoCriacao){
      Obras.filtrarAno(req.query.anoCriacao)
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro))
    }
    else if (req.query.compositor){
      Obras.filtrarComp(req.query.compositor)
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro))
    }
    else {
      Obras.listar()
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro))
    }
})

router.get('/obras/:idObra', function (req, res) {
    Obras.consultar(req.params.idObra)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/compositores', function (req, res) {
  Obras.listarComp()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

router.get('/compositores/:nome', function (req, res) {
  Obras.consultarComp(req.params.nome)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router