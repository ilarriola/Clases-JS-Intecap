const directorio = [];


class Usuarios {
    constructor(nombre, apellido, rol, correo, telefono, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
        this.correo = correo;
        this.telefono = telefono;
        this.password = password;
        
    }
}


const adminUno = new Usuarios('Juan', 'Alvarez', 'Administrador', 'juanperez@hotelesgt.com', 22334455, '123Admin');
const adminDos = new Usuarios('Maria', 'Batz', 'Administrador', 'mariabatz@hotelesgt.com', 33445566, '234Admin');
const recepcionista = new Usuarios('Daniela', 'Cortez', 'Recepcionista', 'danielacortez@hotelesgt.com', 44556677, '123Recepcion');
const adminTres = new Usuarios('Antonio', 'Dardon', 'Administrador', 'antoniodardon@hotelesgt.com', 55667788, '345Admin');
const recepcionistaDos = new Usuarios('Nicolas', 'Estrada', 'Recepcionista', 'nicolasestrada@hotelesgt.com', 66778899, '234Recepcion');
const adminCuatro = new Usuarios('Martha', 'Flores', 'Administrador', 'marthaflores@hotelesgt.com', 77889900, '456Admin');

directorio.push(adminUno, adminDos, adminTres, adminCuatro, recepcionista, recepcionistaDos);

function saveDirectiorioToLocalStorage() {
    localStorage.setItem('directorio', JSON.stringify(directorio));
}
saveDirectiorioToLocalStorage();


function saveUserToLocalStorage(user) {
    localStorage.setItem('userEmail', user.correo);
}


function loadUserFromLocalStorage() {
    const userEmail = localStorage.getItem('userEmail');
    return directorio.find(user => user.correo === userEmail);
}

var formulario = document.getElementById("login-form");

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    var datos = new FormData(formulario);
    const nombre = datos.get("user");
    const contraseña = datos.get("contraseña");

    let usuarioEncontrado = directorio.find(usuario => usuario.correo === nombre && usuario.password === contraseña);

    if (usuarioEncontrado) {
        console.log('Usuario encontrado:', usuarioEncontrado.nombre, usuarioEncontrado.rol);

        
        saveUserToLocalStorage(usuarioEncontrado);

        if (usuarioEncontrado.rol === 'Administrador') {
            window.location.href = 'admin.html'; 
        } else {
            window.location.href = 'noadmin.html'; 
        }
    } else {
        console.log('Credenciales incorrectas. Intenta nuevamente o contacta al administrador.');
    }
});


const currentUser = loadUserFromLocalStorage();
if (currentUser) {
    console.log('Usuario cargado desde localStorage:', currentUser.nombre, currentUser.rol);
}