if ( location.pathname === '/tienda-virtual/index.html' ){
    inicioPagina();
}

if ( location.pathname === '/tienda-virtual/login.html') {
    btnSubmit.addEventListener('click', validarLogin);
}

// if (calcularCantidadTotal()) {
//     cantidadProductosCarrito.textContent = calcularCantidadTotal();
// }

if(location.pathname === '/tienda-virtual/carrito.html') {
    paginaCarrito();
}

if(location.pathname === '/tienda-virtual/detalle.html') {
    agregarDetalleProducto(localStorage.getItem('idProducto'));
}
