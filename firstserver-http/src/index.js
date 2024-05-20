const http = require('http');

const routes = require('./routes')

const server = http.createServer((request, response)=> {
    console.log(`Request method: ${request.method} | Endpoint: ${request.url}`)

    const route = routes.find((routeObj) => (
        routeObj.endpoint === request.url && routeObj.method === request.method
    ));

    if (route){
        route.handler(req,res)
    }else{
        response.writeHead(404, {'Content-Type' : 'application/json'})
        response.end(`Cannot ${request.url} ${request.method}`)
    }
})

server.listen(8080, ()=>{console.log("Server Rodando")})


