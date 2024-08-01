while (true) {
    let numero = parseInt(prompt("intrucuce un numero para validar si es positivo o negativo "));
        if (numero > 0) {
            console.log (numero + " es positivo");
            
        } else if  (numero < 0) { 
            console.log( numero +" es negativo");
            break;
        } else {
            console.log("ingresaste 0 el programa se cerrara")
            break;
        }
}
