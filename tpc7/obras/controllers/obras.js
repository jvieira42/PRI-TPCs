const mongoose = require('mongoose')

var ObraModel = require('../models/obras')

const Obras = module.exports

Obras.listar = () => {
    return ObraModel
        .find()
        .exec()
}

Obras.consultar = id => {
    return ObraModel
        .findOne({_id: id})
        .exec()
}

Obras.filtrarPeriodo = p => {
    return ObraModel
        .find({periodo: p})
        .exec()
}

Obras.filtrarAno = ano => {
    return ObraModel
    .find({anoCriacao: ano})
    .exec()
}

Obras.filtrarComp = c => {
    return ObraModel
    .find({compositor: c})
    .exec()
}

Obras.listarComp = c => {
    return ObraModel
    .aggregate([{$group: {_id: "$compositor", numObras: {$sum: 1}}},{$sort: {numObras: -1}}])
    .exec()
}

//Apresenta cada compositor e suas obras em lista
Obras.consultarComp = nome => {
    return ObraModel
    .aggregate([{$match: {compositor: nome}},{$group: {_id: "$compositor", obras: {$push: "$nome"}}}])
    .exec()
}