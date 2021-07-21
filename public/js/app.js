const formulario = document.getElementById('form');
const campoTexto = document.getElementById('campoTexto');
const contenedorLista = document.getElementById('contenedorLista');
const template = document.getElementById('plantilla');
//const fragment = document.createDocumentFragment();

let tareas = {};

contenedorLista.addEventListener('click', e => {
    btnAccion(e);
})
formulario.addEventListener('submit', ev => {
    ev.preventDefault();
    construyeTarea(ev);
});

const construyeTarea = ev => {
    if (campoTexto.value.trim() === '') {
        return
    }
    const tarea = {
        id: Date.now(),
        texto: campoTexto.value,
        estado: false
    }
    tareas[tarea.id] = tarea;
    campoTexto.focus();
    mostrarTareas();
    formulario.reset();
}

const mostrarTareas = () => {
    contenedorLista.innerHTML = '';
    const lista = document.createElement('div');
    lista.setAttribute('class', 'col-12 justify-content-center mt-3');
    Object.values(tareas).forEach(tarea => {
        const salto = document.createElement('br');
        const divTarea = document.createElement('div');
        divTarea.setAttribute('class', 'bloque alert bg-light d-flex justify-content-between align-items-center col-9');
        const parrafo = document.createElement('p');
        parrafo.textContent = tarea.texto;
        divTarea.appendChild(parrafo);
        const botones = document.createElement('h3');
        const botonMarcar = document.createElement('i');
        botonMarcar.setAttribute('class', 'far fa-circle text-secondary');
        botonMarcar.dataset.id = tarea.id;
        //botonMarcar.setAttribute('class', '');
        botones.appendChild(botonMarcar);
        const botonBorrar = document.createElement('i');
        botonBorrar.setAttribute('class', 'fas fa-minus-circle text-danger');
        botonBorrar.dataset.id = tarea.id;
        //botonBorrar.setAttribute('class', '');
        botones.appendChild(botonBorrar);
        divTarea.appendChild(botones);
        lista.appendChild(divTarea);
        lista.appendChild(salto);
    });
    contenedorLista.appendChild(lista);
}

const btnAccion = e => {
    if (e.target.classList.contains('fa-circle')){
        tareas[e.target.dataset.id].estado = true;
        mostrarTareas();
    }
    e.stopPropagation();
}