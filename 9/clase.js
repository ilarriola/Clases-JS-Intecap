// arrays
// creacion de array unidimensional
let fruits = ['apple', 'banana', 'mango', 'orange'];

//accediendo a elementos del array
console.log(fruits[0]);
console.log(fruits[2]);

// .push agrega el elemento al final del array
fruits.push ('grape');

// .shift eliminando el primer elemento del array

fruits.shift();
console.log(fruits);


// .pop elimina el ultimo elemento del array

fruits.pop();
console.log(fruits);

// .unshift agrega un elemento al iunicio del array

fruits.unshift('pears')
console.log(fruits);

//recorriendo el array
fruits.forEach((fruits)=>{
    console.log(fruits);
});




