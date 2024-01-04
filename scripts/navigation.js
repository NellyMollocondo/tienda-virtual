if ( location.pathname === '/index.html' ){
    inicioPagina();
}

if ( location.pathname === '/login.html') {
    btnSubmit.addEventListener('click', validarLogin);
}

// if (calcularCantidadTotal()) {
//     cantidadProductosCarrito.textContent = calcularCantidadTotal();
// }

if(location.pathname === '/carrito.html') {
    paginaCarrito();
}

if(location.pathname === '/detalle.html') {
    agregarDetalleProducto(localStorage.getItem('idProducto'));
}
