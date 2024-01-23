if ( location.pathname.endsWith('/index.html') || location.pathname.endsWith('/')){
    inicioPagina();
    btnBuscar.addEventListener('click',buscarMostrarProducto);
}

if ( location.pathname.endsWith('/login.html')){
    btnSubmit.addEventListener('click', validarLogin);
}

if ( location.pathname.endsWith('/pagina.html')){
    btnBuscar.addEventListener('click',buscarMostrarProducto);
}

if(location.pathname.endsWith('/carrito.html')){
    paginaCarrito();
}

if(location.pathname.endsWith('/detalle.html')) {
    agregarDetalleProducto(localStorage.getItem('idProducto'));
}
