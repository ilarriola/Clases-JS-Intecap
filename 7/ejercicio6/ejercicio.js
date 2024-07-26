
console.log ('|---------------MENU----------------|');
console.log ('1. Sumar ');
console.log ('2. Restar');
console.log ('3. Salir');
console.log ('|---------------MENU----------------|');

let opciones = prompt ("Menu: ingrese una opcion como se muestra en consola");

var numeroUno = undefined
var numeroDos = undefined




switch (opciones) {

    case '1' :

     numeroUno = parseFloat (prompt("ingrese el primer numero"));
     numeroDos = parseFloat(prompt("ingrese el segundo numero a sumar"));
            console.log ((numeroUno + numeroDos ));

        break;
    
    case '2':

    numeroUno = parseFloat (prompt("ingrese el primer numero "));
    numeroDos = parseFloat(prompt("ingrese el segundo numero a restar"));
        console.log (numeroUno - numeroDos);
    
    
        break;
    case '3':
        console.log ("hasta luego!")

        break;

    default:
        console.log ('|Ingrese menu valido|');
        break;
}
