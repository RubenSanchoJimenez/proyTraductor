/* 
   Clase que representa el modelo general de la aplicación.
   Contiene métodos para clonar, borrar clon, borrar todo, almacenar, recuperar almacenado, traducir, cambiar vista,
   recoger idiomas y insertar idiomas en un select.
   Importa el módulo Rest desde "../servicios/rest.js".
*/
import { Rest } from "../servicios/rest.js";

export class Model {

    /**
     * Constructor de la clase Model.
     * @param {Object} controller - Instancia del controlador asociado al modelo.
     */
    constructor(controller) {
        this.controller = controller;
        this.rest = Rest;
    }

    /**
     * Método para clonar el contenido de la textarea en la vista inicial.
     * @param {Object} objVistaInicial - Instancia de la vista inicial.
     */
    modClonar(objVistaInicial) {
        let original = objVistaInicial.textarea;
        let clon = original.cloneNode(true);
        clon.value = "";
        objVistaInicial.contenedorClonados.appendChild(clon);
    }

    /**
     * Método para clonar el contenido en la vista final.
     * @param {Object} objVistaFinal - Instancia de la vista final.
     * @param {string} textoAlmacenado - Texto almacenado a clonar.
     * @param {string} textoTraducido - Texto traducido a clonar.
     * @param {number} contadorClones - Contador de clones.
     */
    modClonarFinal(objVistaFinal, textoAlmacenado, textoTraducido, contadorClones) {
        if (contadorClones > 0) {
            let original = objVistaFinal.resultadoOriginal;
            let clon = original.cloneNode(true);
            clon.getElementsByTagName('textarea')[0].value = textoAlmacenado;
            clon.getElementsByTagName('textarea')[1].value = textoTraducido;
            objVistaFinal.contenedorResultados.appendChild(clon);
        } else {
            objVistaFinal.resultadoOriginal.getElementsByTagName('textarea')[0].value = textoAlmacenado;
            objVistaFinal.resultadoOriginal.getElementsByTagName('textarea')[1].value = textoTraducido;
        }
    }

    /**
     * Método para borrar el último clon en la vista inicial.
     * @param {Object} objVistaInicial - Instancia de la vista inicial.
     */
    modBorrarClon(objVistaInicial) {
        let ultimoElemento = objVistaInicial.contenedorClonados.lastChild;
        if (ultimoElemento) {
            objVistaInicial.contenedorClonados.removeChild(ultimoElemento);
        }
    }

    /**
     * Método para borrar todo en la vista inicial.
     * @param {Object} objVistaInicial - Instancia de la vista inicial.
     */
    modBorrarTodo(objVistaInicial) {
        objVistaInicial.textarea.value = "";
        while (objVistaInicial.contenedorClonados.firstChild) {
            objVistaInicial.contenedorClonados.removeChild(objVistaInicial.contenedorClonados.firstChild);
        }
    }

    /**
     * Método para borrar todo en la vista final.
     * @param {Object} objVistaFinal - Instancia de la vista final.
     */
    modBorrarTodoFinal(objVistaFinal) {
        while (objVistaFinal.contenedorResultados.firstChild) {
            objVistaFinal.contenedorResultados.removeChild(objVistaFinal.contenedorResultados.firstChild);
        }
    }

    /**
     * Método para almacenar el texto introducido.
     * Sube con POST y recoge con GET el texto introducido.
     * @param {string} texto - Texto a almacenar.
     */
    modAlmacenar(texto) {
        const datosParaEnviar = {
            campo1: texto
        };
        
        // Llamada al método post
        Rest.post("/ajax2.php", [], datosParaEnviar, true)
            .then((respuesta) => {
                console.log("Solicitud exitosa:", respuesta);
            })
            .catch((error) => {
                console.error("Error en la solicitud:", error);
            });
    }
    

    /**
     * Método asincrónico para recuperar el texto almacenado.
     * Utiliza await para esperar a que se complete la operación asíncrona.
     * @returns {string} - Texto almacenado.
     */
    async modAlmacenado() {
        try {
            const data = await Rest.get("/ajax3.php");
            return data.texto;
        } catch (error) {
            throw error; // Lanzamos el error para que pueda ser manejado en el código que llama a modAlmacenado.
        }
    }
    

    /**
     * Método asincrónico para traducir el texto.
     * Utiliza await para esperar a que se complete la operación asíncrona.
     * @returns {string} - Texto traducido.
     */
    async modTraducir() {
        try {
            const data = await Rest.get("/ajax.php");
            return data.texto;
        } catch (error) {
            throw error; // Lanzamos el error para que pueda ser manejado en el código que llama a modTraducir.
        }
    }

    /**
     * Método para cambiar la vista entre dos elementos.
     * @param {Object} vista1 - Elemento a mostrar.
     * @param {Object} vista2 - Elemento a ocultar.
     */
    modCambiarVista(vista1, vista2) {
        vista1.style.display = "block";
        vista2.style.display = "none";
    }

    /**
     * Método asincrónico para recoger los idiomas disponibles.
     * Utiliza await para esperar a que se complete la operación asíncrona.
     * @returns {Object} - Datos de idiomas.
     */
    async modRecogerIdiomas() {
        try {
            const data = await Rest.get("/ajax4.php");
            return data;
        } catch (error) {
            throw error; // Lanzamos el error para que pueda ser manejado en el código que llama a modAlmacenado.
        }
    }

    /**
     * Método para insertar opciones de idiomas en un select.
     * Necesita introducir options en el select.
     * @param {Object} select - Elemento select.
     * @param {Array} arrIdiomas - Array de idiomas.
     */
    modInsertarIdiomas(select, arrIdiomas) {
        for (let i = 0; i < arrIdiomas.length; i++) {
            let optionElement = document.createElement('option');
            optionElement.value = arrIdiomas[i]; // Modificado para reflejar la estructura del objeto idioma.
            optionElement.text = arrIdiomas[i]; // Modificado para reflejar la estructura del objeto idioma.
            select.appendChild(optionElement);
        }
    }

}
