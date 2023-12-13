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
        this.model.modClonar(this.objVistaInicial, this.objVistaFinal)

    }

    borrarClon(){
        this.model.modBorrarClon(this.objVistaInicial, this.objVistaFinal)

    }

    borrarTodo(){
        this.model.modBorrarTodo(this.objVistaInicial, this.objVistaFinal)

    }

    traducir() { 
        this.model.modCambiarVista(this.objVistaFinal.vistaFinal, this.objVistaInicial.vistaInicial)

    }
    
    volver(){
        this.model.modCambiarVista(this.objVistaInicial.vistaInicial, this.objVistaFinal.vistaFinal)

    }
    
}

const controller = new Controller()
