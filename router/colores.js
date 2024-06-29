import express from 'express'
import Controlador from '../controlador/colores.js'


class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/', this.controlador.saludar)
        this.router.post('/colores', this.controlador.ingresarColores)
        this.router.get('/colores', this.controlador.obtenerColores)
            return this.router
    }
}

export default Router

