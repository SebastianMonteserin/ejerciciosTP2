import express from 'express'
import RouterColores from './router/colores.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//app.use(express.static('public'))


app.use('/', new RouterColores().start())


const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
