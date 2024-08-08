
let datos = [];
let arrayUno = [];
let arrayDos = [];
let arrayTres =  [];
let arrayCuatro = [];


for (let i = datos.length; i < 20; i++) {
    let numeros = parseInt(prompt("Ingrese un numero, se solicitaran hasta 20 numeros"));
    datos.push (numeros);
     
     }
     
    arrayUno = datos.slice([ ,4]);
    arrayDos = datos.slice([5, 9]);
    arrayTres = datos.slice([10, 14]);
    arrayCuatro = datos.slice([15, 19]);
     console.log (datos);
     console.log(arrayUno+ "/n"+ arrayDos + "/n"+arrayTres+ "/n"+ arrayCuatro);
    








