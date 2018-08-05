const vinos = document.getElementById('lista-vinos');
const listaCarrito = document.querySelector('.lista-carrito tbody');
const btnVaciarCarrito = document.getElementById('vaciar-carrito');
const btnBorrarVino = document.querySelector('.carrito');

cargarListeners();

function cargarListeners(){
    vinos.addEventListener('click', comprarVino);
    btnVaciarCarrito.addEventListener('click', vaciarCarrito);
    btnBorrarVino.addEventListener('click', borrarVino);
}


function comprarVino(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const vino = e.target.parentElement.parentElement;
        leerDatosVinos(vino);
    }
}

function leerDatosVinos(vino){
    const infoVino = {
        imagen: vino.querySelector('img').src,
        nombreVino: vino.querySelector('h5').textContent,
        descripcionVino: vino.querySelector('p').textContent,
        idVino: vino.querySelector('a').getAttribute('data-id')
    };

    añadirAlCarrito(infoVino);
}

function añadirAlCarrito(vino){
    const fila = document.createElement('tr');
    fila.innerHTML = `<td class="align-middle"><img src="${vino.imagen}" width="100px"></td>
                      <td class="align-middle">${vino.nombreVino}</td>
                      <td class="align-middle">${vino.descripcionVino}</td>
                      <td class="align-middle">
                        <i class="fas fa-times-circle borrar-vino" data-id="${vino.idVino}"></i>
                      </td>
    `;

    listaCarrito.appendChild(fila);
}

function borrarVino(e){
    e.preventDefault();
    let vino;
    if (e.target.classList.contains('borrar-vino')) {
        vino = e.target.parentElement.parentElement;
        vino.remove();
    }
}

function vaciarCarrito(){
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}