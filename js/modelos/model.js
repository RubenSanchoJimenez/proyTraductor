/* Modelo general */

import { Rest } from "../servicios/rest.js"

export class Model{

    constructor(controller){
        this.controller = controller
        this.rest = Rest
    }

    modClonar(objVistaInicial, objVistaFinal){
        let original = objVistaInicial.textarea
        let clon = original.cloneNode(true)
        clon.value = ""
        objVistaInicial.contenedorClonados.appendChild(clon)

        original = objVistaFinal.resultadoOriginal
        clon = original.cloneNode(true)
        objVistaFinal.contenedorResultados.appendChild(clon)

    }

    modBorrarClon(objVistaInicial, objVistaFinal){
        let ultimoElemento = objVistaInicial.contenedorClonados.lastChild
        if (ultimoElemento){
            objVistaInicial.contenedorClonados.removeChild(ultimoElemento)
        }

        ultimoElemento = objVistaFinal.contenedorResultados.lastChild
        if (ultimoElemento){
            objVistaFinal.contenedorResultados.removeChild(ultimoElemento)
        }

    }

    modBorrarTodo(objVistaInicial, objVistaFinal){
        objVistaInicial.textarea.value = ""
        while (objVistaInicial.contenedorClonados.firstChild) {
            objVistaInicial.contenedorClonados.removeChild(objVistaInicial.contenedorClonados.firstChild)
        }

        while (objVistaFinal.contenedorResultados.firstChild) {
            objVistaFinal.contenedorResultados.removeChild(objVistaFinal.contenedorResultados.firstChild)
        }
    }

    modTraducir(){
        
    }

    modCambiarVista(vista1, vista2){
        vista1.style.display = "block"
        vista2.style.display = "none"
    }

}