var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var nanoid = require('nanoid')

var myBD = __dirname + '/../data/alunos.json'

router.get('/alunos', function(req, res) {
  jsonfile.readFile(myBD, (erro,dados)=>{
    if(!erro){
        res.render('index', {lista: dados})
    }
    else {
        res.render('error', {error:erro})
    }
  })
})

router.post('/alunos', function(req,res) {
  var aluno = req.body
  aluno['notas'] = []
  jsonfile.readFile(myBD, (erro,alunos)=> {
    if(!erro){
      alunos.push(aluno)
      jsonfile.writeFile(myBD, alunos, erro => {
        if (erro) console.log(erro)
        else console.log('Registo gravado com sucesso')
      })
    }
    res.render('index', {lista: alunos})
  })
})

router.get('/alunos/:idAluno', function(req, res) {
  var id = req.params.idAluno
  jsonfile.readFile(myBD, (erro,alunos)=>{
    if(!erro){
        var aluno = alunos.find(a => a.id == id)
        if(aluno){
          res.render('aluno', {al: aluno})
        }
    }
    else {
        res.render('error', {error:erro})
    }
  })
})

router.delete('/alunos/:idAluno', function(req,res){
  var id = req.params.idAluno
  jsonfile.readFile(myBD, (erro,alunos) =>{
    if(!erro) {
      var index = alunos.findIndex(a => a.id == id)
      if(index > -1){
        alunos.splice(index,1)
        jsonfile.writeFile(myBD,alunos,erro => {
          if(erro) console.log(erro)
          else console.log('Aluno removido com sucesso')
        })
      }
    }
    res.render('index', {lista: alunos})
  })
})

router.post('/alunos/:idAluno/notas', function(req,res) {
  var id = req.params.idAluno
  var nota = req.body
  jsonfile.readFile(myBD, (erro,alunos)=> {
    if(!erro){
      var aluno = alunos.find(a => a.id == id)
      aluno.notas.push(nota)
      jsonfile.writeFile(myBD, alunos, erro => {
        if (erro) console.log(erro)
        else console.log('Nota gravada com sucesso')
      })     
    }
    res.render('aluno', {al: aluno})
  })
})

router.delete('/alunos/:idAluno/notas/:idNota', function(req,res){
  var idA = req.params.idAluno
  var idN = req.params.idNota
  jsonfile.readFile(myBD, (erro,alunos) =>{
    if(!erro) {
      var aluno = alunos.find(a => a.id == idA)
      var index = aluno.notas.findIndex(n => n.id == idN)
      if(index > -1){
        aluno.notas.splice(index,1)
        jsonfile.writeFile(myBD,alunos,erro => {
          if(erro) console.log(erro)
          else console.log('Nota removida com sucesso')
        })
      }
    }
    res.render('aluno', {al: aluno})
  })
})

module.exports = router;
