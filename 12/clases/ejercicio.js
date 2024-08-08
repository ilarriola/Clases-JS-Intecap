
class cuentaBancaria {
numeroDeCuenta;
saldo;

constructor (numeroDeCuenta, saldo){
    this.numeroDeCuenta = numeroDeCuenta
    this.saldo = saldo
}

}
let cuentaUno = new cuentaBancaria(1,500);
let cuentaDos = new cuentaBancaria(2,300);



//console.log ("bienvenido No. "+ cuentaUno.numeroDeCuenta+" Su saldo es "+cuentaUno.saldo+"Q");

 
let usuario = parseFloat(prompt("ingrese su numero de cuenta"));

if (usuario===cuentaUno.numeroDeCuenta) {
  let operacion = prompt("Ingrese que operacion desa realizar (+) para abonar, (-) para retirar, (=) para ver su saldo")
  switch ( operacion) {

    case "+":
    let suma = parseFloat(prompt("ingrese monto a abonar")) 
    let abono = cuentaUno.saldo + suma;
    cuentaUno.saldo = abono;
    console.log("su nuevo saldo es "+  cuentaUno.saldo)     
    break;

    case "-":
    let resta = parseFloat(prompt("ingrese monto a retirar")) 
    let debito = cuentaUno.saldo - resta ;
    cuentaUno.saldo = abono;
    console.log("su nuevo saldo es "+  cuentaUno.saldo)     
    break;

    case "=":
    console.log("su saldo es "+  cuentaUno.saldo)        
    break;

    default:
        console.log("Operación no válida");
        break;
}



}else if (usuario===cuentaDos.numeroDeCuenta) {
    let operacion = prompt("Ingrese que operacion desa realizar (+) para abonar, (-) para retirar, (=) para ver su saldo")
    switch ( operacion) {
  
      case "+":
      let suma = parseFloat(prompt("ingrese monto a abonar")) 
      let abono = cuentaDos.saldo + suma;
      cuentaDos.saldo = abono;
      console.log("su nuevo saldo es "+  cuentaDos.saldo)     
  
          break;
  
      case "-":
      let resta = parseFloat(prompt("ingrese monto a retirar")) 
      let debito = cuentaDos.saldo - resta;
      cuentaDos.saldo = abono;
      console.log("su nuevo saldo es "+  cuentaDos.saldo)     
          
          break;
  
      case "=":
      console.log("su saldo es "+  cuentaDos.saldo)        
          break;
  
      default:
        console.log("Operación no válida");
          break;
    }
} else {
    console.log("ingrese un nuemero de cuenta valido")
    
}
