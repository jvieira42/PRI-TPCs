var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/:idTip', function(req, res, next) {
  var id = req.params.idTip;
  axios.all([axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+id+'?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'),
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+id+'/elementos/?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'),
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+id+'/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'),
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+id+'/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')])
     .then(axios.spread((tip, ent, dono, part) => { 
         res.render('tipologia',{tip:tip.data,ent:ent.data, dono: dono.data, part:part.data})
     }))
     .catch(error => console.log(error));
})

module.exports = router;
