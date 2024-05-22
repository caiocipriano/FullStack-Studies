const express = require ('express')

const app = express()

app.get('/', (request, response)=>{
    response.send("Olá, mundo!")
})

app.listen(8080, ()=> console.log("Serviço rodando http://localhost:8080"))