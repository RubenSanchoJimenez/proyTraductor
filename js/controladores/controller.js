/* Controlador general */

import { VistaInicial } from "../vistas/vistaInicial.js";
import { VistaFinal } from "../vistas/vistaFinal.js";
import { Model } from "../modelos/model.js";

class Controller{

    constructor(){

        this.objVistaInicial = new VistaInicial(this)
        this.objVistaFinal = new VistaFinal(this)
        this.model = new Model(this)
    }

    clonar(){
        let original = this.objVistaInicial.textarea
        let clon = original.cloneNode(true)
        clon.value = ""
        this.objVistaInicial.contenedorClonados.appendChild(clon)

        original = this.objVistaFinal.resultadoOriginal
        clon = original.cloneNode(true)
        this.objVistaFinal.contenedorResultados.appendChild(clon)
    }

    borrarClon(){
        let ultimoElemento = this.objVistaInicial.contenedorClonados.lastChild
        if (ultimoElemento){
            this.objVistaInicial.contenedorClonados.removeChild(ultimoElemento)
        }

        ultimoElemento = this.objVistaFinal.contenedorResultados.lastChild
        if (ultimoElemento){
            this.objVistaFinal.contenedorResultados.removeChild(ultimoElemento)
        }
    }

    borrarTodo(){
        this.objVistaInicial.textarea.value = ""
        while (this.objVistaInicial.contenedorClonados.firstChild) {
            this.objVistaInicial.contenedorClonados.removeChild(this.objVistaInicial.contenedorClonados.firstChild)
        }

        while (this.objVistaFinal.contenedorResultados.firstChild) {
            this.objVistaFinal.contenedorResultados.removeChild(this.objVistaFinal.contenedorResultados.firstChild)
        }
    }

    traducir(){
        
    }

    volver(){

    }

}

const controller = new Controller()