/* Vista inicial vistaInicial */

export class VistaInicial {

    constructor(controller) {
        // Instancia de elementos
        this.controller = controller;
        this.vistaInicial = document.getElementById('vistaInicial')
        this.h1 = this.vistaInicial.getElementsByTagName('h1')[0]
        this.select = this.vistaInicial.getElementsByTagName('select')[0]
        this.textarea = this.vistaInicial.getElementsByTagName('textarea')[0]
        this.buttonClone = this.vistaInicial.querySelector('#buttonClone')
        this.buttonTranslate = this.vistaInicial.querySelector('#translate')
        this.buttonDelete = this.vistaInicial.querySelector('#delete')

        // Eventos
        this.buttonClone.addEventListener('click', () => {this.controller.clonar(this.textarea)})
        this.buttonTranslate.addEventListener('click', controller.clonar)
        this.buttonDelete.addEventListener('click', controller.clonar)
    }

}
