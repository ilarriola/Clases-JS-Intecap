let numero = 64;
let filas = '';
let columnas ='----------------------------------------------- \n';

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (numero < 10){
            filas += '| ' +numero+ ' |'
            numero--;
        }else {
            filas += '| ' +numero+' |'
            numero--;
        }
        
    }
    columnas += filas + "\n"
    columnas += '----------------------------------------------- \n';
    filas= '';
}
console.log(columnas)

