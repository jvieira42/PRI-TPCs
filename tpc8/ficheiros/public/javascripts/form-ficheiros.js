$(function() {
    var cont = 1

    $('#mais1').click(e => {
        e.preventDefault()
        cont++
        var campo = $('<div></div>', {class: 'w3-container', id: 'f'+cont})
        var desc = $('<div></div>', {class: 'w3-cell-row', id: 'desc'+cont})
        var descLabel = $('<label class="w3-cell">Descrição:</label>')
        var descInput = $('<input/>', {class: 'w3-input w3-cell', type: 'text', name: 'desc'})
        var ficheiro = $('<div></div>', {class: 'w3-cell-row', id: 'ficheiro'+cont})
        var ficheiroLabel = $('<label class="w3-cell">Ficheiro:</label>')
        var ficheiroInput = $('<input/>', {class: 'w3-input w3-cell', type: 'file', name: 'ficheiro'})
        $("#lista").append(campo)
        $("#f"+cont).append(ficheiro)
        $("#ficheiro"+cont).append(ficheiroLabel, ficheiroInput)
        $("#f"+cont).append(desc)
        $("#desc"+cont).append(descLabel, descInput)
        
    })
})


function show_me(linha,f) {
    var ficheiro = $('<h3>' + f.name + '</h3>\n<ul><li>Descrição: ' +  f.desc + '</li><li>Tipo: ' +  f.mimetype + '</li><li>Tamanho: ' +  f.size + '</li></ul>')
    $("#display").empty()
    $('#display').append(ficheiro)


    if(f.mimetype.startsWith('image')) 
        $('#display').append($('<img>', {id : 'image',src : 'images/' + f.name, width: '300'}))

    $('#display').modal()
}

