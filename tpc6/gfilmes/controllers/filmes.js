const mongoose = require('mongoose')

var Filme = require('../models/filmes')

const Filmes = module.exports

Filmes.listar = () => {
    return Filme
        .find()
        .exec()
}

Filmes.consultar = id => {
    return Filme
        .findOne({_id: id})
        .exec()
}

Filmes.contar = () => {
    return Filme
        .countDocuments()
        .exec()
}

Filmes.inserir = filme => {
    filme._id = mongoose.Types.ObjectId()

    var filterCast = filme.cast.filter(function (c) {
        return c != "";
      });
    var filterGenres = filme.genres.filter(function (g) {
        return g != "";
      });

    filme.cast = filterCast;
    filme.genres = filterGenres;
    var novo = new Filme(filme)
    return novo.save()
}

Filmes.remover = id => {
    return Filme
        .deleteOne({_id: id})
        .exec()
}