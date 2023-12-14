/** 
 * Clase que representa la vista final de la aplicación
 * @param {Object} controller - Instancia del controlador asociado a la vista
 */
export class VistaFinal {

    /**
     * Constructor de la clase VistaFinal
     * @param {Object} controller - Instancia del controlador asociado a la vista
     */
    constructor(controller) {
        this.controller = controller
        this.vistaFinal = document.getElementById('vistaFinal')
        this.contenedorResultados = this.vistaFinal.querySelector('#contenedorResultados')
        this.botonVolver = this.vistaFinal.querySelector('#botonVolver')
        this.resultadoOriginal = this.vistaFinal.querySelector('#resultadoOriginal')

        this.botonVolver.addEventListener('click', () => { this.controller.volver() })
    }
}
