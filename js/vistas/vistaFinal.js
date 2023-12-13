/* Vista Final vistaFinal */

export class VistaFinal{

    constructor(controller){
        this.controller = controller
        this.vistaFinal = document.getElementById('vistaFinal')
        this.contenedorResultados = this.vistaFinal.querySelector('#contenedorResultados')
        this.botonVolver = this.vistaFinal.querySelector('#botonVolver')
        this.resultadoOriginal = this.vistaFinal.querySelector('#resultadoOriginal')

        this.botonVolver.addEventListener('click', () => {this.controller.volver()})
    }
}