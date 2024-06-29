import Servicio from '../servicio/colores.js'


class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }


    saludar = async (req, res) => {
        const saludo = await this.servicio.saludar()
        console.log(saludo)
        res.json({saludo})
    }


    ingresarColores = async (req, res) => {
            const colores = req.body
            const coloresGuardados = await this.servicio.ingresarColores(colores)
            res.json(coloresGuardados)
    }

    obtenerColores = async (res) => {
            const colores = await this.servicio.obtenerColores()
            res.json(colores)
    
    }


   
}
export default Controlador
