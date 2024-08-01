while (true) {
    let numero = parseInt(prompt("intrucuce un numero para iniciar o ingrese un numero negativo para salir"));
        if (numero > 0) {
            console.log (numero **2);
            
        } else{
            console.log("ingresaste un numero negativo se finalizara el programa");
            break;
        }
}