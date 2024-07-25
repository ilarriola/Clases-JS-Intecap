let numeroUno = parseFloat (prompt("Ingrese el primer numero"));
let numeroDos = parseFloat (prompt("Ingrese el segundo numero"));
let numeroTres = parseFloat (prompt("Ingrese el tercer numero"));

alert("Se ordenaran de mayor a menor");
/*
los casos
a>b>c (a mayor a b, b mayor a c)
a>b<c (a mayor a b, b menor a c)
a<b>c (a menor a b, b mayor a c)
a<b<c (a menor a b, b menor a c)

mayor >
menor <
*/

if (numeroUno > numeroDos && numeroDos > numeroTres) {
    alert(numeroUno + ", " + numeroDos + ", " + numeroTres);
} else if (numeroUno > numeroDos && numeroDos < numeroTres) {
    alert(numeroUno + ", " + numeroTres + ", " + numeroDos);
} else if (numeroUno < numeroDos && numeroDos > numeroTres) {
    alert(numeroDos + ", " + numeroTres + ", " + numeroUno);
} else {
    alert(numeroTres + ", " + numeroDos + ", " + numeroUno);
}

    
