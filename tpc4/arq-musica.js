var http = require('http')
var pug = require('pug')
var fs = require('fs')

var myserver = http.createServer(function (req,res){
    var array_url = req.url.split('/')
    var page = array_url[array_url.length-2]
    var page_id = array_url[array_url.length-1]
    
    console.log(req.method + ' ' + req.url)
    console.log(array_url)
    
    if(req.method == 'GET'){
        if(req.url == '/w3.css'){
            fs.readFile('w3.css',(erro, dados)=>{
                if(!erro){
                    res.writeHead(200,{'Content-type':'text/css'})
                    res.write(dados)
                }
                else{
                    res.writeHead(200,{'Content-type':'text/plain'})
                    res.write('Erro na leitura do w3.css...')
                }
                res.end()
            })
        }
        else if(page == 'musica' && parseInt(page_id,10) > 0 && parseInt(page_id,10) < 449){
            fs.readFile('data/doc' + page_id + '.xml', (erro, dados)=>{
                if(!erro){
                    res.writeHead(200, {'Content-Type':'text/xml'}) 
                    res.write(dados);
                }
                else {
                    res.writeHead(200, {'Content-Type':'text/plain'}) 
                    res.write('Erro na leitura do ficheiro doc' + page_id + '.xml...')
                }
                res.end()  
            })    
        }
        else if(page_id == 'doc2html.xsl'){
            fs.readFile('doc2html.xsl',(erro, dados)=>{
                if(!erro){
                    res.writeHead(200,{'Content-type':'text/xsl'})
                    res.write(dados)
                }
                else{
                    res.writeHead(200,{'Content-Type':'text/plain'})
                    res.write('Erro na leitura do doc2html.xsl...')
                }
                res.end()
            })
        }
        else if(req.url == '/'){
            res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
            res.write(pug.renderFile('index.pug'))
            res.end()
        }
    }
})

myserver.listen(3090)

console.log("Servidor a escuta na porta 3090")