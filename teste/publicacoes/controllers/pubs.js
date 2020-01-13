const mongoose = require('mongoose')

var PubModel = require('../models/pubs')

const Pubs = module.exports

Pubs.listar = () => {
    return PubModel
        .find({},{"id":"id","title":"title","year":"year","type":"type"})
        .exec()
}

Pubs.consultar = id => {
    return PubModel
    .findOne({id: id})
    .exec()
}

Pubs.filtrarType = type => {
    return PubModel
        .find({"type":type})
        .exec()
}

Pubs.filtrarTypeYear = (type,year) => {
    return PubModel
        .find({type:type,year:{$gt:year}})
        .exec()
}

Pubs.filtrarAutor = autor => {
    return PubModel
        .aggregate([{$match: {authors: autor}},{$group: {"_id": autor, pubs: {$push: "$title"}}}])
        .exec()
}

Pubs.listarTypes = () => {
    return PubModel
    .aggregate([{$unwind: "$type"},{$group: {_id:"$type"}}])
    .exec()
}

Pubs.listarAutores = () => {
    return PubModel
    .aggregate([{$unwind: "$authors"},{$group: {_id:"$authors"}},{$sort: {_id: 1}}])
    .exec()
}

//---------------------------
