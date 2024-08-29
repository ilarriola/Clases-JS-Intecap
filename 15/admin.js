directorio=[];
const userEmail = localStorage.getItem('userEmail');

const storedData = localStorage.getItem('directorio');
if (storedData) {
    const parsedData = JSON.parse(storedData);
    directorio.push(...parsedData);
}
const currentUser = directorio.find(user => user.correo === userEmail);
console.log(currentUser);
const userDisplayName = document.getElementById('userDisplayName');
userDisplayName.textContent = `¡Hola, ${currentUser.nombre +' '+ currentUser.apellido}!`;

class Usuarios {
    constructor(nombre, apellido, rol, correo, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
        this.correo = correo;
        this.telefono = telefono;
    }
}





const userTable = document.getElementById('userTable');
function addUserToTable(user) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${user.nombre}</td>
        <td>${user.apellido}</td>
        <td>${user.rol}</td>
        <td>${user.correo}</td>
        <td>${user.telefono}</td>
        <td>
            <button onclick="editUser()">Editar</button>
            <button onclick="deleteUser()">Eliminar</button>
        </td>
    `;
    userTable.appendChild(row);
}


directorio.forEach(addUserToTable);
const addUserBtn = document.getElementById('addUserBtn');
addUserBtn.addEventListener('click', addUser);

function saveToLocalStorage() {
    localStorage.setItem('directorio', JSON.stringify(directorio));
}






function addUser() {
    const userName = document.getElementById('nombre').value.trim();   
    const userApellido = document.getElementById('apellido').value.trim(); 
    const userRol = document.getElementById('rol').value; 
    const userCorreo = document.getElementById('correo').value.trim(); 
    const userTelefono = document.getElementById('telefono').value.trim(); 

    if (userName && userApellido && userRol && userCorreo && userTelefono) {

        const newUser = new Usuarios(userName, userApellido, userRol, userCorreo, userTelefono,);
        directorio.push(newUser);
        addUserToTable(newUser);
        saveToLocalStorage();
        nombre.value = '';
        apellido.value = '';
        correo.value = '';
        telefono.value = '';
    }
}






/*

////ejercicio////


const taskInput = document.getElementById('taskInput');
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskList = document.getElementById('taskList');

        const tasks = [];

        const addTask = () => {
            const task = {
                id: Date.now(),
                text: taskInput.value,
                completed: false
            };
            tasks.push(task);
            renderTasks();
            taskInput.value = '';
        };

        const renderTasks = () => {
            taskList.innerHTML = tasks.map(({ id, text, completed }) => `
                <li class="task${completed ? ' completed' : ''}" data-id="${id}">
                    ${text}
                    <button onclick="toggleTask(${id})">Complete</button>
                    <button onclick="deleteTask(${id})">Delete</button>
                </li>
            `).join('');
        };

        const toggleTask = id => {
            const task = tasks.find(task => task.id === id);
            if (task) {
                task.completed = !task.completed;
                renderTasks();
            }
        };

        const deleteTask = id => {
            const index = tasks.findIndex(task => task.id === id);
            if (index !== -1) {
                tasks.splice(index, 1);
                renderTasks();
            }
        };

        addTaskBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') addTask();
        });













        */