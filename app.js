/*let parrafo =  document.querySelector("p");
parrafo.innerHTML = " Indica un numero del 1 al 10"; */
let numeroMaximo = 10 ;
let listaNumeroSorteados = [];
let numeroSecreto = GenerarNumeroSecreto();
let Intentos = 0;



function asignarTectoElemento(Elemento, Texto) {
    let elementoHTML = document.querySelector(Elemento);
    elementoHTML.innerHTML = Texto;
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTectoElemento("p",`Acertaste el número en ${Intentos} ${(Intentos === 1 ) ? "vez" : "veces"}`);
        
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        // usuario no acerto 
        if(numeroDeUsuario > numeroSecreto) {
            asignarTectoElemento("p","El numero secreto Menor");
    } else{
        asignarTectoElemento("p","El numero secreto Mayor");
        }
        Intentos++;
        limpiarCaja();
    }
   return;
}

function limpiarCaja () {
    document.querySelector("#valorUsuario").value = "";
}

function GenerarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);

    // ya sorteamos todos los numeros
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTectoElemento ("p","ya se sortearon todos los numeros posibles");

    }else {

    // si el numero genrado esta en la lista.


    if (listaNumeroSorteados.includes(numeroGenerado)) {
        return GenerarNumeroSecreto();

    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

    }
}

function condicionesIniciales (){
    asignarTectoElemento ("H1","Juego del numero secreto");
    asignarTectoElemento ("p",`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = GenerarNumeroSecreto();
    Intentos = 1;
}

function reiniCiarJuego() {
    // limpiar la caja 
    limpiarCaja();
    // indicar mensaje de intervalos de numeros
    // generar el numero aleatorio
    // inicializar el numero de intentos
    condicionesIniciales();
    //deshabilotar el boton de nuevo juego 
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
