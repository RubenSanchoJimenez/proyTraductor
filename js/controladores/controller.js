/* Controlador general */

import { VistaInicial } from "../vistas/vistaInicial.js";
import { VistaFinal } from "../vistas/vistaFinal.js";
import { Model } from "../modelos/model.js";

class Controller{

    constructor(){

        const vistaInicial = new VistaInicial(this)
        const vistaFinal = new VistaFinal(this)
        const model = new Model(this)
    }

    clonar(textarea, contenedor) {
        const original = textarea
        const clon = original.cloneNode(true)
        clon.value = ""
        contenedor.appendChild(clon)
    }

    borrarClon(contenedor){
        const ultimoElemento = contenedor.lastChild
        if (ultimoElemento){
            contenedor.removeChild(ultimoElemento)
        }
    }

    borrarTodo(textarea, contenedor){
        textarea.value = ""
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
    }

}

const controller = new Controller()