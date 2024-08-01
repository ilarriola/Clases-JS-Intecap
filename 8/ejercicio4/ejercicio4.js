alert ("reglas del juego");
alert ("reglas: ");
alert  ("1. se necesitan dos jugadores. ");
alert ("2. uno sera el moderador(quien ingresara el numero a adivinar. )");
alert ("3. el otro debera adivinar el numero introducido enbase a las pistas que el programa le dara indicando si es mayor o menor. ")
alert ( "4. nota: si ingresas 0 no sera valido y se tomara como si te rindes(el 0 esta restringido para terminar el juego, los numeros ingresados pueden ser positivos o negativos pero jamas 0. )")
alert (" en consola se iran dando las pistas");
alert("se iniciara el juego ");


let numeroAdivinar = parseFloat(prompt("moderador ingrese el numero, asegurese que el jugador no lo vea"));
let numero;

do {
    numero = parseFloat(prompt("ingrese el numero que cree que es")); 
        if (numero === 0 || numeroAdivinar === 0) {
        console.log ("haz terminado el juego")
        break;
        
        } else if (numero === numeroAdivinar) {
            console.log ("ganaste el juego")
            alert ("GANASTE!!!!");
        
            }else if (numero > numeroAdivinar) {
                console.log (" el numero a divinar es menor");
            
                }else {
                    console.log ("el numero es mayo");
            }
    
    
 } while (true);



