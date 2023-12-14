/** 
 * Clase que representa la vista inicial de la aplicación
 * @param {Object} controller - Instancia del controlador asociado a la vista
 */
export class VistaInicial {

    /**
     * Constructor de la clase VistaInicial
     * @param {Object} controller - Instancia del controlador asociado a la vista
     */
    constructor(controller) {
        // Instancia de elementos del DOM
        this.controller = controller
        this.vistaInicial = document.getElementById('vistaInicial')
        this.h1 = this.vistaInicial.getElementsByTagName('h1')[0]
        this.select = this.vistaInicial.getElementsByTagName('select')[0]
        this.textarea = this.vistaInicial.getElementsByTagName('textarea')[0]
        this.buttonClone = this.vistaInicial.querySelector('#buttonClone')
        this.buttonDeleteClone = this.vistaInicial.querySelector('#buttonDeleteClone')
        this.buttonTranslate = this.vistaInicial.querySelector('#translate')
        this.buttonDelete = this.vistaInicial.querySelector('#delete')
        this.contenedorClonados = this.vistaInicial.querySelector('#contenedorClonados')

        // Asignación de eventos a los botones
        this.buttonClone.addEventListener('click', () => { this.controller.clonar() })
        this.buttonDeleteClone.addEventListener('click', () => { this.controller.borrarClon() })
        this.buttonDelete.addEventListener('click', () => { this.controller.borrarTodo() })
        this.buttonTranslate.addEventListener('click', () => { this.controller.traducir() })
    }
}
