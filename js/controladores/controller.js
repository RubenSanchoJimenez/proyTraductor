/* 
   Controlador general que gestiona la lógica de la aplicación.
   Importa las clases VistaInicial, VistaFinal y Model desde los módulos correspondientes.
*/

import { VistaInicial } from "../vistas/vistaInicial.js";
import { VistaFinal } from "../vistas/vistaFinal.js";
import { Model } from "../modelos/model.js";

class Controller {

    /**
     * Constructor de la clase Controller.
     * Inicializa instancias de las vistas y el modelo, así como variables de control.
     */
    constructor() {

        this.objVistaInicial = new VistaInicial(this);
        this.objVistaFinal = new VistaFinal(this);
        this.model = new Model(this);
        this.contadorClones = 0;
        this.textos = [];
    }

    /**
     * Método asincrónico para recoger los idiomas disponibles y actualizar el select en la vista inicial.
     */
    async recogerIdiomas() {
        let datos = await this.model.modRecogerIdiomas();
        console.log(datos);
        let arrIdiomas = datos.map(function(item) {
            return item.nombre;
        });
        
        this.model.modInsertarIdiomas(this.objVistaInicial.select, arrIdiomas);
    }

    /**
     * Método para clonar el contenido de la textarea en la vista inicial.
     */
    clonar() {
        this.model.modClonar(this.objVistaInicial);
    }

    /**
     * Método para borrar el último clon en la vista inicial.
     */
    borrarClon() {
        this.model.modBorrarClon(this.objVistaInicial);
    }

    /**
     * Método para borrar todo en la vista inicial.
     */
    borrarTodo() {
        this.model.modBorrarTodo(this.objVistaInicial);
    }

    /**
     * Método asincrónico para traducir el contenido de las textareas en la vista inicial.
     */
    async traducir() {
        let i = 0;
    
        while (this.objVistaInicial.vistaInicial.getElementsByTagName('textarea')[i]) {
            this.model.modAlmacenar(this.objVistaInicial.vistaInicial.getElementsByTagName('textarea')[i].value);
    
            let textoTraducido = await this.model.modTraducir();
            let textoAlmacenado = await this.model.modAlmacenado();
    
            this.model.modClonarFinal(this.objVistaFinal, textoAlmacenado, textoTraducido, this.contadorClones);
            this.model.modCambiarVista(this.objVistaFinal.vistaFinal, this.objVistaInicial.vistaInicial);
    
            this.contadorClones++;
            i++;
        }
    }
    
    /**
     * Método para volver a la vista inicial, borrar todo en la vista final y reiniciar el contador de clones.
     */
    volver() {
        this.model.modCambiarVista(this.objVistaInicial.vistaInicial, this.objVistaFinal.vistaFinal);
        this.model.modBorrarTodoFinal(this.objVistaFinal);
        this.contadorClones = 0;
    }
    
}

// Instancia del controlador y llamada al método para recoger idiomas al iniciar la aplicación.
const controller = new Controller();
controller.recogerIdiomas();
