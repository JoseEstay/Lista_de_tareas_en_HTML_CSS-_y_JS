const tareaInput = document.querySelector('#tarea') 
const formulario = document.querySelector('#formulario')
const contenedorPublicaciones = document.querySelector('#contenedor-post')

function crearPublicacion(textoTarea){
    const postUser = document.createElement('div')
    postUser.classList.add('posteo')
   
    const textoUsuario = document.createElement('p')
    textoUsuario.textContent = textoTarea;
    
    const btnEliminar = document.createElement('button')
    btnEliminar.textContent = 'Eliminar'
    btnEliminar.classList.add('btn-eliminar')
    btnEliminar.addEventListener('click', () => {
        postUser.remove(); 
    });
    
    // Ensamblar
    postUser.appendChild(textoUsuario)
    postUser.appendChild(btnEliminar)
    contenedorPublicaciones.appendChild(postUser)
}

formulario.addEventListener('submit', function(e){
    e.preventDefault() 
    
    const valorTarea = tareaInput.value;
    
    // .trim() evita que se envíen tareas compuestas solo por espacios en blanco
    if(valorTarea.trim() === ''){
        alert('Debes escribir una tarea')
    } else {
        crearPublicacion(valorTarea);
        tareaInput.value = ''
    }
})