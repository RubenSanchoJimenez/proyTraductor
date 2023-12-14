/* Modelo general */

import { Rest } from "../servicios/rest.js"

export class Model{

    constructor(controller){
        this.controller = controller
        this.rest = Rest
    }

    modClonar(objVistaInicial){
        let original = objVistaInicial.textarea
        let clon = original.cloneNode(true)
        clon.value = ""
        objVistaInicial.contenedorClonados.appendChild(clon)
    }

    modClonarFinal(objVistaFinal, textoAlmacenado, textoTraducido, contadorClones){
        if(contadorClones>0){
            let original = objVistaFinal.resultadoOriginal
            let clon = original.cloneNode(true)
            clon.getElementsByTagName('textarea')[0].value = textoAlmacenado
            clon.getElementsByTagName('textarea')[1].value = textoTraducido
            objVistaFinal.contenedorResultados.appendChild(clon)
        }else{
            objVistaFinal.resultadoOriginal.getElementsByTagName('textarea')[0].value = textoAlmacenado
            objVistaFinal.resultadoOriginal.getElementsByTagName('textarea')[1].value = textoTraducido
        }
    }

    modBorrarClon(objVistaInicial){
        let ultimoElemento = objVistaInicial.contenedorClonados.lastChild
        if (ultimoElemento){
            objVistaInicial.contenedorClonados.removeChild(ultimoElemento)
        }
    }

    modBorrarTodo(objVistaInicial){
        objVistaInicial.textarea.value = ""
        while (objVistaInicial.contenedorClonados.firstChild) {
            objVistaInicial.contenedorClonados.removeChild(objVistaInicial.contenedorClonados.firstChild)
        }
    }

    modBorrarTodoFinal(objVistaFinal){
        while (objVistaFinal.contenedorResultados.firstChild) {
            objVistaFinal.contenedorResultados.removeChild(objVistaFinal.contenedorResultados.firstChild)
        }
    }

    modAlmacenar(texto) {
        // Subo con POST y recojo con GET el texto introducido
        const datosParaEnviar = {
            campo1: texto
        }
        
        // Llamada al método post
        Rest.post("/ajax2.php", [], datosParaEnviar, true)
            .then((respuesta) => {
            console.log("Solicitud exitosa:", respuesta)
            })
            .catch((error) => {
            console.error("Error en la solicitud:", error)
            })
    }
    

    async modAlmacenado() {
        try {
            // Utilizamos await para esperar a que se complete la operación asíncrona
            const data = await Rest.get("/ajax3.php")
    
            // Devolvemos el texto almacenado
            return data.texto
        } catch (error) {
            throw error // Lanzamos el error para que pueda ser manejado en el código que llama a modAlmacenado
        }
    }
    

    async modTraducir() {
        try {
            // Utilizamos await para esperar a que se complete la operación asíncrona
            const data = await Rest.get("/ajax.php")
    
            // Devolvemos el texto traducido
            return data.texto
        } catch (error) {
            throw error // Lanzamos el error para que pueda ser manejado en el código que llama a modTraducir
        }
    }

    modCambiarVista(vista1, vista2){
        vista1.style.display = "block"
        vista2.style.display = "none"
    }

    async modRecogerIdiomas() {
        try {
            // Utilizamos await para esperar a que se complete la operación asíncrona
            const data = await Rest.get("/ajax4.php")
    
            // Devolvemos el texto almacenado
            console.log(data)
            return data
        } catch (error) {
            throw error // Lanzamos el error para que pueda ser manejado en el código que llama a modAlmacenado
        }
    }

    modInsertarIdiomas(objVistaInicial, arrIdiomas){
        
    }

}