/* Vista inicial vistaInicial */

export class VistaInicial{

    constructor(){
        this.vistaInicial = document.getElementById('vistaInicial')
        this.h1 = this.vistaInicial.getElementsByTagName('h1')[0]
        this.select = this.vistaInicial.getElementsByTagName('select')[0]
        this.button = this.vistaInicial.getElementsByTagName('button')[0]
    }
    
}