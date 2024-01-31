
/*
let parrafo =document.querySelector("p");
parrafo.innerHTML="Indica un numero del 1 al 10";*/
let numeroSecreto  = generarNumeroSecreto();
let intentos=1;
let listaNumerosSorteados =[];
let numeroMaximo =10;

function  asignarTextoElemento(elemento, texto){
    let titulo =document.querySelector(elemento);
    titulo.innerHTML =texto;
}
/*
function intentoDelUsuario(){
    alert("click desde el boton");
    return;
}*/

function verficarIntento() {
    let numeroDeUsuario =parseInt(document.getElementById("valorUsuario").value);
 /*   console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);*/
    console.log(numeroDeUsuario === numeroSecreto);
    console.log(intentos);
    if (numeroDeUsuario ===numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos ===1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero es Menor");
        }else{
            asignarTextoElemento("p","El numero es mayor");
        }
        limpiarCaja();
        intentos ++;
    }
    return;
}
function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario").value ="";

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo);
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length() == numeroMaximo) {
        asignarTextoElemento(`p`,`Ya se sortearon todos los numeros posibles`);
    }else{
        //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    

}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del numero Secreto !");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}` );
    intentos=1;
    numeroSecreto=generarNumeroSecreto();

}
function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //reiniciar random
    //reiniciar mensaje inicio
    condicionesIniciales();
    //inmicializar numero de intentos
    
    //desabilitar boton
    document.getElementById("reiniciar").setAttribute("disabled",true);
    


    
}
condicionesIniciales();
