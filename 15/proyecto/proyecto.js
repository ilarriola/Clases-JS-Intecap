/*
class Usuarios {
    constructor(nombre, apellido, rol, correo, telefono, password) {
        this.nombre = nombre
        this.apellido = apellido 
        this.rol = rol
        this.correo =  correo
        this.telefono = telefono
        this.password = password
        
    }
}
let directorio = []

const adminUno = new Usuarios('Juan','Alvarez','Administrador','juanperez@hotelesgt.com',22334455,'123Admin');
const adminDos = new Usuarios('Maria', 'Batz', 'Administrador', 'mariabatz@hotelesgt.com', 33445566,'234Admin');
const recepcionista = new Usuarios('Daniela', 'Cortez', 'Recepcionista', 'danielacortez@hotelesgt.com', 44556677, '123Recepcion');
const adminTres = new Usuarios('Antonio', 'Dardon', 'Administrador', 'antoniodardon@hotelesgt.com', 55667788, '345Admin');
const recepcionistaDos = new Usuarios('Nicolas', 'Estrada', 'Recepcionista', 'nicolasestrada@hotelesgt.com', 66778899, '234Recepcion');
const adminCuatro = new Usuarios('Martha', 'Flores', 'Administrador', 'marthaflores@hotelesgt.com', 77889900, '456Admin');
directorio.push(adminUno, adminDos, adminTres, adminCuatro, recepcionista, recepcionistaDos);

console.log (directorio);

//let usuarioNuevo = new Usuarios ();// hay que crear el formulario
//function agregarUsuario (usuarioNuevo) { // funcion debe ser llamada para ayudar a llenar el formulario
//    directorio.push (usuarioNuevo)
//}
///////////////////////////////////////////////////LOGIN////////////////////////////////////////////

var formulario = document.getElementById("login-form");

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        var datos = new FormData(document.getElementById("login-form"));
        console.log(datos);
        if (datos.get("username")== "" || datos.get("password")) {
            
            alert("no se puede dejar campos vacios")
            
        }
    const nombre = datos.get ("username");
    const contraseña = datos.get("password");    
        alert("nombre", "password");
                
    })
   


//let login =  datos.get('username');
//let contrasena = document.getElementById('password');
//console.log(login, contrasena);

//let login = ('danielacortez@hotelesgt.com'); //test
//let contrasena = ('123Recepcion'); //test, 
//let usuarioEncontrado = null;
/*
for (const usuario of directorio) {
    if (usuario.correo === login && usuario.password === contrasena) {
        
        usuarioEncontrado = usuario;
        break; 
    }
}

if (usuarioEncontrado) {
    // if para desplegar menu segun usuario
    console.log('usuario:', usuarioEncontrado.nombre, usuarioEncontrado.rol);
} else {
    console.log('credenciales incorrectas. intenta nuevamente o contacta al administrador.');
}

*/