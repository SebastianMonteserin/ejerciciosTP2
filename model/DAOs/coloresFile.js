import fs from 'fs'


class ModelFile {
    constructor() {
        this.nombreArchivo = 'colores.json'
    }

    leerArchivo = async nombre => {
        let colores = []
        try {
            colores = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        }
        catch { }

        return colores
    }

    escribirArchivo = async (nombre, colores) => {
        await fs.promises.writeFile(nombre, JSON.stringify(colores, null, '\t'))
    }

    ingresarColores = async (coloresAIngresar) => {
        let colores = await this.leerArchivo(this.nombreArchivo)
        let existe = false
        let i = 0
        const error = {error: 'color ya ingresado'}
        while (existe == false && i < coloresAIngresar.length) {
            if (colores.includes(coloresAIngresar[i])) {
                existe = true
            }
            i++
        }
        if (existe) {
            return error

        } else {
            colores = colores.concat(coloresAIngresar)
            await this.escribirArchivo(this.nombreArchivo, colores)
            return colores
        }
    } 


obtenercolores = async () => {
    try {
        const colores = await this.leerArchivo(this.nombreArchivo)
        return colores
    }

    catch {
        return id ? {} : []
    }
}


}

export default ModelFile