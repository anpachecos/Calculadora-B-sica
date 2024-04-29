var numero1;
var numero2;
var operacion;
var resultado; 

function init(){
    resultado = document.getElementById('resultado'); 
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    uno.onclick = function(e){ 
        resultado.textContent += "1";
    }
    dos.onclick = function(e){
        resultado.textContent += "2";
    }
    tres.onclick = function(e){
        resultado.textContent += "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent += "4";
    }
    cinco.onclick = function(e){
        resultado.textContent += "5";
    }
    seis.onclick = function(e){
        resultado.textContent += "6";
    }
    siete.onclick = function(e){
        resultado.textContent += "7";
    }
    ocho.onclick = function(e){
        resultado.textContent += "8";
    }
    nueve.onclick = function(e){
        resultado.textContent += "9";
    }
    cero.onclick = function(e){
        resultado.textContent += "0";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        numero1 = parseFloat(resultado.textContent);
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        numero1 = parseFloat(resultado.textContent);
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        numero1 = parseFloat(resultado.textContent);
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        numero1 = parseFloat(resultado.textContent);
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        numero2 = parseFloat(resultado.textContent);
        resolver();
    }
}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    numero1 = 0;
    numero2 = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = numero1 + numero2;
            break;

        case "-":
            res = numero1 - numero2;
            break;

        case "*":
            res = numero1 * numero2;
            break;

        case "/":
            if(numero2 !== 0){
                res = numero1 / numero2;
            } else {
                res = "Error";
            }
            break;
    }
    resetear();
    resultado.textContent = res;
}
