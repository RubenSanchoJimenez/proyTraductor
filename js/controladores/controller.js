/* Controlador general */

import { VistaInicial } from "../vistas/vistaInicial.js"
import { VistaFinal } from "../vistas/vistaFinal.js"
import { Model } from "../modelos/model.js"

class Controller{

    constructor(){

        this.objVistaInicial = new VistaInicial(this)
        this.objVistaFinal = new VistaFinal(this)
        this.model = new Model(this)
        this.contadorClones = 0
        this.textos = []
    }

    async recogerIdiomas(){
        let datos = await this.model.modRecogerIdiomas()
        console.log(datos)
        let arrIdiomas = datos.map(function(item) {
            return item.nombre;
        });
        
        this.model.modInsertarIdiomas(this.objVistaInicial, arrIdiomas)
    }

    clonar(){
        this.model.modClonar(this.objVistaInicial)
    }

    borrarClon(){
        this.model.modBorrarClon(this.objVistaInicial)
    }

    borrarTodo(){
        this.model.modBorrarTodo(this.objVistaInicial)
    }

    async traducir() {
        let i = 0;
    
        while (this.objVistaInicial.vistaInicial.getElementsByTagName('textarea')[i]) {
            this.model.modAlmacenar(this.objVistaInicial.vistaInicial.getElementsByTagName('textarea')[i].value)
    
            let textoTraducido = await this.model.modTraducir()
            let textoAlmacenado = await this.model.modAlmacenado()
    
            this.model.modClonarFinal(this.objVistaFinal, textoAlmacenado, textoTraducido, this.contadorClones)
            this.model.modCambiarVista(this.objVistaFinal.vistaFinal, this.objVistaInicial.vistaInicial)
    
            this.contadorClones++
            i++
        }
    }
    
    volver(){
        this.model.modCambiarVista(this.objVistaInicial.vistaInicial, this.objVistaFinal.vistaFinal)
        this.model.modBorrarTodoFinal(this.objVistaFinal)
        this.contadorClones = 0
    }
    
}

const controller = new Controller()
controller.recogerIdiomas()