var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:3090/api/filmes')
    .then(dados => {
      res.render('lista-filmes', { lista: dados.data })
    })
    .catch(erro => {
      res.render('error',{ error: erro })
    })
})

router.get('/inserir', function(req, res) {
  res.render('form-filme')
})

router.get('/:idFilme', function(req, res, next) {
  var id = req.params.idFilme;
  axios.get('http://localhost:3090/api/filmes/' + id)
    .then(dados => {
      res.render('filme', { filme: dados.data })
    })
    .catch(erro => {
      res.render('error',{ error: erro })
    })
})

router.post('/', function (req, res) {
  axios.post('http://localhost:3090/api/filmes', req.body)
    .then(dados => {
      res.redirect('/')
    })
    .catch(erro => {
      res.render('error',{ error: erro })
    })
})

router.delete('/:idFilme', function (req, res) {
  var id = req.params.idFilme;
  axios.delete('http://localhost:3090/api/filmes/' + id)
    .then(dados => {
      res.redirect(303,'/')
    })
    .catch(erro => {
      res.render('error',{ error: erro })
    })
})

module.exports = router;