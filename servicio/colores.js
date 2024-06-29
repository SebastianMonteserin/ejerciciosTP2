//import ModelMem from '../model/DAOs/coloresMem.js'
import ModelFile from '../model/DAOs/coloresFile.js'


class Servicio {
    constructor() {
        // this.model = new ModelMem()
        this.model = new ModelFile()

    }

    saludar = async () => {
        const hora = new Date().getHours()
        let saludo = 'Buenas noches!'
        if (hora >= 6 && hora <= 12) {
            saludo = 'Buenos dias!'
        } else if (hora > 12 && hora <= 19) {
            saludo = 'Buenas tardes!'
        }

        return saludo
    }




    ingresarColores = async (colores) => {
        const coloresGuardados = await this.model.ingresarColores(colores)
        return coloresGuardados
    }

    obtenerColores = async () => {
        const colores = await this.model.obtenerColores()
        return colores
    }



}




export default Servicio