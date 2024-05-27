const express = require ('express')
const app = express()

const routes = require('./routes')

app.use(routes)

app.listen(8080, ()=> console.log("Serviço rodando http://localhost:8080"))
