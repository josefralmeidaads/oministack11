const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes') // importar arquivo routes

app.use(express.json())// para o epress pode ver o json enviado no body

app.use(cors()) // determino qual aplicação pode acessar minha API

app.use(routes) // falando que todas minhas routas irão passar aqui dentro

app.listen(3333)