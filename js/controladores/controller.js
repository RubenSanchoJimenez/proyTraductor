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

    clonar(textarea) {
        console.log("Evento capturado")
        const original = textarea
        const clon = original.cloneNode(true)
        textarea.parentNode.insertBefore(clon, textarea.nextSibling);
    }

}

const controller = new Controller()