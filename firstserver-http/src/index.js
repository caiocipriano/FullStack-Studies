const http = require('http');

const server = http.createServer((request, response)=> {
    response.writeHead(200,{'Content-TYPE':'text/html'})
    response.end('<h1>Olá Mundo</h1>')
})

server.listen(8080, ()=>{console.log("Server Rodando")})


//git config --global user.email "caio.silvax@hotmail.com"
//git config --global user.name "caiocipriano"