const http = require('http');
const { URL } = require('url')
const routes = require('./routes')

const server = http.createServer((request, response)=> {
    const parseUrl = new URL (`http://localhost:8080${request.url}`)
    console.log(`Request method: ${request.method} | Endpoint: ${parseUrl.pathname}`)

    const route = routes.find((routeObj) => (
        routeObj.endpoint === parseUrl.pathname && routeObj.method === request.method
    ));

    if (route){
        request.query = Object.fromEntries(parseUrl.searchParams)
    }else{
        response.writeHead(404, {'Content-Type' : 'application/json'})
        response.end(`Cannot ${request.url} ${request.method}`)
    }
})

server.listen(8080, ()=>{console.log("Server Rodando")})


