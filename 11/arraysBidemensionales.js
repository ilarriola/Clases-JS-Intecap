// creacion de un array bidimensional
let matrix = [
    [1,2,3], // fila0
    [4,5,6], // fila 1
    [7,8,9]  // fila 2
];

// accediendo a los elementos del array bidemensional
console.log (matrix[0][0]);
console.log (matrix[1][2]);

// primero se lee por fila y luego por columna

// modificnado un elemento en la matriz
matrix[2][0] = "Mango";
console.log (matrix[2][0]);

//recorriendo la matriz
for (let i = 0; i < matrix.length; i++) {
   for(let j = 0; j< matrix[i].length; j++)
    console.log(matrix[i][j]);
    
}

/*
let trampa = Math.floor(Math.random()*(5 - 2 + 1) + 2);

*/