var express = require('express');
var router = express.Router();
var fs = require('fs')
var Ficheiros = require('../controllers/ficheiros')
var Ficheiro = require('../models/ficheiros')


var multer = require('multer')
var upload = multer({ dest: 'uploads/' })


router.get('/ficheiros', function(req, res, next) {
  Ficheiros.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});


router.post('/ficheiros', upload.array('ficheiro'), function(req,res) {

 var data = new Date()
 var i = 0
 
 for(f of req.files){
    var descricao = ""
    // Mudar path
    var oldPath = __dirname + '/../' + f.path
    var newPath

    if(f.mimetype.startsWith('image'))
      newPath = __dirname + '/../public/images/' + f.originalname
    else 
      newPath = __dirname + '/../data/' + f.originalname
    
    
    fs.rename(oldPath, newPath, function(err) {
      if (err) throw err
    })
    
    //Guardar descricao
    if(req.files.length == 1 && req.body.desc.length == 1) descricao = req.body.desc
    else if (req.body.desc[i]!='') descricao = req.body.desc[i]
    else descricao = req.body.desc[i+1]
    
    //Guardar ficheiro
    var novoFicheiro = new Ficheiro(
      {
        data: data.toISOString(),
        desc: descricao,
        name: f.originalname,
        path: newPath,
        mimetype: f.mimetype,
        size: f.size
      })

      novoFicheiro.save()
      i++
     
  }
    res.redirect(303,'/')
  })
  
  
  
module.exports = router;
