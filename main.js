import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import {encuntraarray} from "./Utils.js"

document.getElementById('limpiar').addEventListener('click', limpiartxt)

document.getElementById('agrupar').addEventListener('click', creargrupos)


function limpiartxt() {
    document.getElementById("textarea1").value = "";
    document.getElementById("grupos").value = "";
}

function creargrupos() {
    const nameList = textarea1.value.split('\n')
    const grupo = grupos.value
    const resultado = document.getElementById("result")

    let arraysresult = encuntraarray(nameList,grupo)
    let msg = ''
    arraysresult.forEach(element => {
        let num = 1
        
        if(element.length < grupo){
            msg += "Queda sin Grupo: " + element + "<br\>"
        } else{
           msg += "Grupo "  + num + ": " +element + "<br\>"
        }
        num++
    });

    resultado.innerHTML = msg
   
}