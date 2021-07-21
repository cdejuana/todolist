const formulario = document.getElementById('formTareas');
const campoTexto = document.getElementById('campoTexto');
const contenedorLista = document.getElementById('contenedorLista');
const template = document.getElementById('plantilla');
//const fragment = document.createDocumentFragment();

let tareas = {};

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
        botones.innerHTML = '<i class="fas fa-check-circle text-success"></i>\n' +
            '                            <i class="fas fa-minus-circle text-danger"></i>'
        divTarea.appendChild(botones);
        lista.appendChild(divTarea);
        lista.appendChild(salto);
    });
    contenedorLista.appendChild(lista);
}

