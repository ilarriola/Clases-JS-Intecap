let numeroUno = parseFloat(prompt("ingrese el primer numero"))
let operacion = prompt("Ingrese el operador(+) para suma, (-) para resta, (*) para multiplicacion, (/) para divicion")
let numeroDos = parseFloat(prompt("ingrese el segundo numero"))


switch (operacion) {
    case "+":
        console.log ("Suma "+ (numeroUno + numeroDos))
        break;
    
    case "-" :
        console.log ("Resta "+ (numeroUno - numeroDos))
        break;
    
    case "*" :
           console.log ("Multiplicacion "+ (numeroUno * numeroDos))
           break;

    
    case "/" :
           console.log ("Divicion "+ (numeroUno / numeroDos))
           break;

    default:
        console.log ("ingrese un operador valido")
        break;
}
