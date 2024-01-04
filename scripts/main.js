//Usuarios registrados
const usuarios = [
    { 
        correo: 'nelly@gmail.com',
        contrasena: '123',
    },
    { 
        correo: 'marco@gmail.com',
        contrasena: '456',
    },
];

function inicioPagina() {
    mostrarModal();
    agregarCatalogo();
}

// Función para agregar el catalogo a la web
function agregarCatalogo() {
    productos.forEach(
        ({ id, imagen, marca, nombre, precio, descuento }) => crearProducto(id, imagen, marca, nombre, precio, descuento));
}

function almacenarIdProducto(idProducto) {
    localStorage.setItem('idProducto', idProducto);
}

// Función para agregar el producto
function crearProducto( id, imagePath, brand, name, price, discount ) {

    // Contenedor del producto
    const contenedorProducto = document.createElement("div");
    contenedorProducto.classList.add('producto', 'd-flex', 'flex-column', 'col-6', 'col-sm-6', 'col-md-3', 'col-lg-3', 'col-xl-2', 'align-items-center');

    // Imagen
    const imagen = document.createElement("img");
    imagen.classList.add('img-fluid');
    imagen.setAttribute('src', imagePath);
    imagen.setAttribute('alt', name);
    imagen.setAttribute('width', 140);
    imagen.setAttribute('height', 170);

    // Contenedor de la descripcion
    const contenedorDescripcion = document.createElement("div");
    contenedorDescripcion.classList.add('descripcion', 'd-flex', 'flex-column', 'align-items-center');

    // Marca
    const marca = document.createElement("h2");
    const contenidoMarca = document.createTextNode(brand.toUpperCase());
    marca.appendChild(contenidoMarca);

    // Nombre de producto
    const producto = document.createElement("p");
    producto.addEventListener('click', () => almacenarIdProducto(id));

    const enlaceDetalleDesdeProducto = document.createElement("a");
    const contenidoProducto = document.createTextNode(name);
    enlaceDetalleDesdeProducto.append(contenidoProducto);
    enlaceDetalleDesdeProducto.setAttribute('href', '../detalle.html');
    producto.appendChild(enlaceDetalleDesdeProducto);

    // Precio original
    const contenedorPrecioOriginal = document.createElement("p");
    const contenidoPrecio = document.createTextNode(`S/. ${price}`);
    contenedorPrecioOriginal.append(contenidoPrecio);

    // Precio actual
    const contenedorPrecioActual = document.createElement("p");
    const etiquetaPrecio = document.createElement("span");
    const precioActual = document.createElement("span");
    // contenido
    const contenidoEtiquetaPrecio = document.createTextNode("Precio");
    const contenidoPrecioActual = document.createTextNode(` S/. ${Math.round((1 - discount) * price)}`);
    // añadir el contenido
    etiquetaPrecio.appendChild(contenidoEtiquetaPrecio);
    precioActual.appendChild(contenidoPrecioActual);
    contenedorPrecioActual.append(etiquetaPrecio, precioActual);

    // Agregar contenedor para ver detalle
    const contenedorVerDetalle = document.createElement("p");
    contenedorVerDetalle.addEventListener('click', () => almacenarIdProducto(id));

    // ver detalle
    const enlaceDetalle = document.createElement("a");
    enlaceDetalle.setAttribute('href', './detalle.html');
    enlaceDetalle.setAttribute('data-bs-toggle', 'tooltip');
    enlaceDetalle.setAttribute('data-bs-placement', 'top');
    enlaceDetalle.setAttribute('title', 'Ver producto');

    const iconInfo = document.createElement("i");
    iconInfo.classList.add('bi', 'bi-info-circle');
    iconInfo.style.color = 'black';
    enlaceDetalle.append(iconInfo);

    contenedorVerDetalle.append(enlaceDetalle);

    // Añadir elementos a body
    contenedorDescripcion.append(contenedorVerDetalle, marca, producto, contenedorPrecioOriginal, contenedorPrecioActual)
    contenedorProducto.append(imagen, contenedorDescripcion);
    filaCatalogoProd.append(contenedorProducto);
}

// Función para el modal de promoción
function mostrarModal() {
    const modalEntrada = new bootstrap.Modal("#modalEntrada");
    modalEntrada.show();
}

//validacion de login

function validarLogin() {
    event.preventDefault();
    let valorCorreo = inputCorreoLogin.value;
    let valorContrasena = inputContrasenaLogin.value;
    let usuarioFiltrado = usuarios.filter(usuario => 
        usuario.correo === valorCorreo &&
        usuario.contrasena === valorContrasena
    );
    
    if(!usuarioFiltrado.length) {
        alert('Debe ingresar las credenciales correctas'); 
    } else {
        console.log('Login validado');
        localStorage.setItem('usuario', JSON.stringify(usuarioFiltrado));
        location.href = location.origin + '/pagina.html';
    }
}

//Detalle de productos

function agregarDetalleProducto(id) {
    const productoBuscado = detalleProductos.filter(detalle => detalle.id === id);
    const producto = productos.filter(producto => producto.id === id);
    const {nombre} = producto[0];
    const {precio, descuento, descripcion, tallas, rutaImagen, categoria} = productoBuscado[0];

    crearDetalleProducto(nombre, precio, descuento, descripcion, tallas, rutaImagen, categoria);
}

function asignarCantidadDisponible(arrayTallas, etiqueta, entrada) {
    let arrayFiltradoPorTalla = arrayTallas.filter(t => t.talla === event.target.value);
    etiqueta.textContent = '';
    etiqueta.textContent = arrayFiltradoPorTalla[0].cantidad 
                            ? `${arrayFiltradoPorTalla[0].cantidad} disponibles` 
                            : `Sin stock`;
    entrada.setAttribute('min', '0');
    entrada.setAttribute('max', arrayFiltradoPorTalla[0].cantidad);
    arrayFiltradoPorTalla[0].cantidad ? entrada.disabled = false : entrada.value = 0;
}

function crearDetalleProducto(nombre, precio, descuento, descripcion, tallas, rutaImagen, categoria) {
    
    let precioActual = descuento ? `${Math.round((1 - descuento) * precio)}` : precio;

    const contenedorImagenCol = document.createElement('div');
    contenedorImagenCol.classList.add('col-sm-3', 'col-md-3', 'col-lg-3');
    const contenedorImagenFil = document.createElement('div');
    contenedorImagenFil.classList.add('row');

    const contenedorImagen = document.createElement('div');
    contenedorImagen.classList.add('col-12', 'mb-5');
    const etiquetaImagen = document.createElement('img');
    etiquetaImagen.classList.add('img-fluid', 'mx-auto', 'd-block');
    etiquetaImagen.setAttribute('src', rutaImagen);
    etiquetaImagen.setAttribute('width', 260);
    etiquetaImagen.setAttribute('height', 350);
    etiquetaImagen.setAttribute('alt', nombre);

    contenedorImagen.append(etiquetaImagen);
    contenedorImagenFil.append(contenedorImagen);
    contenedorImagenCol.append(contenedorImagenFil);

    const contenedorDetalle = document.createElement('div');
    contenedorDetalle.classList.add('col-sm-8', 'col-md-8', 'col-lg-6', 'text-center');

    const contenedorCategoria = document.createElement('div');
    contenedorCategoria.classList.add('col', 'col-12');
    const etiquetaCategoria = document.createElement('h2');
    const etiquetaCategoriaValor = document.createTextNode(categoria.toUpperCase());
    etiquetaCategoria.append(etiquetaCategoriaValor);
    contenedorCategoria.append(etiquetaCategoria);

    const contenedorNombreProducto = document.createElement('div');
    contenedorNombreProducto.classList.add('col', 'col-12');
    const etiquetaNombreProducto = document.createElement('h2');
    const etiquetaNombreProductoValor = document.createTextNode(nombre);
    etiquetaNombreProducto.append(etiquetaNombreProductoValor);
    contenedorNombreProducto.append(etiquetaNombreProducto);

    const contenedorPrecio = document.createElement('div');
    contenedorPrecio.classList.add('col', 'col-12');
    const etiquetaPrecio = document.createElement('h4');
    const etiquetaPrecioValor = document.createTextNode(`S/.${precioActual}`);
    etiquetaPrecio.append(etiquetaPrecioValor);
    contenedorPrecio.append(etiquetaPrecio);

    const contenedorDescripcion = document.createElement('div');
    contenedorDescripcion.classList.add('col', 'col-12');
    const etiquetaDescripcion = document.createElement('p');
    etiquetaDescripcion.classList.add('text-start');
    const etiquetaDescripcionValor = document.createTextNode(descripcion);
    etiquetaDescripcion.append(etiquetaDescripcionValor);
    contenedorDescripcion.append(etiquetaDescripcion);

    const contenedorTamano = document.createElement('div');
    contenedorTamano.classList.add('col', 'col-12', 'd-flex', 'pb-3');

    const etiquetaTamano = document.createElement('label');
    etiquetaTamano.classList.add('col-3');
    etiquetaTamano.setAttribute('for', 'tamano');
    const etiquetaTamanoValor = document.createTextNode('Tamaño');
    etiquetaTamano.append(etiquetaTamanoValor);

    const listaTamano = document.createElement('select');
    listaTamano.classList.add('form-select', 'rounded-pill');
    listaTamano.setAttribute('id', 'tamano');
    listaTamano.addEventListener('change', () => asignarCantidadDisponible(tallas, etiquetaCantidadDisponible, entradaCarrito));
 
    const opcionPorDefecto = document.createElement('option');
    opcionPorDefecto.setAttribute('selected', '');
    const opcionPorDefectoValor = document.createTextNode('Elige una opción');
    opcionPorDefecto.append(opcionPorDefectoValor);
    listaTamano.append(opcionPorDefecto);
    
    tallas.forEach(({talla}) => {       
        let opcion = document.createElement('option');
        opcion.value = talla;
        opcion.textContent = talla;
        listaTamano.append(opcion);
    });   

    contenedorTamano.append(etiquetaTamano, listaTamano);

    const division = document.createElement('hr');

    const contenedorCantidadDisponible = document.createElement('div');
    contenedorCantidadDisponible.classList.add('col', 'col-12');
    const etiquetaCantidadDisponible = document.createElement('p');
    contenedorCantidadDisponible.append(etiquetaCantidadDisponible);

    const contenedorCarrito = document.createElement('div');
    contenedorCarrito.classList.add('col', 'col-12');
    const entradaCarrito = document.createElement('input');
    entradaCarrito.classList.add('col-2', 'p-2', 'border-0', 'border-bottom');
    entradaCarrito.setAttribute('type', 'number');
    entradaCarrito.setAttribute('id', 'cantidadProductos');
    entradaCarrito.setAttribute('min', '0');
    entradaCarrito.setAttribute('value', '0');
    entradaCarrito.setAttribute('disabled', '');
    
    const botonCarrito = document.createElement('button');
    botonCarrito.classList.add('col-8', 'border-0', 'p-2', 'rounded-pill', 'btnCarrito');
    botonCarrito.setAttribute('type', 'submit');
    const botonCarritoValor = document.createTextNode('Añadir al carrito');
    botonCarrito.append(botonCarritoValor);
    botonCarrito.addEventListener('click', () => {
        let cantidadProductos = document.querySelector('#cantidadProductos').value;
        let tallaSeleccionada = document.querySelector('#tamano').value;
        if(document.querySelector('#tamano').value === 'Elige una opción') {
            alert("Debe elegir un tamaño");
            return;
        }
        if (cantidadProductos === '0') {
            alert("Debe elegir una cantidad mayor a cero");
            return;
        }
        alert('Se añadio al carrito' + nombre );
        
        agregarProductoAlCarrito(nombre, tallaSeleccionada, precioActual, cantidadProductos );
    }
        
    );

    contenedorCarrito.append(entradaCarrito, botonCarrito);
    contenedorDetalle.append(contenedorCategoria, contenedorNombreProducto, contenedorPrecio, contenedorDescripcion, contenedorTamano, division, contenedorCantidadDisponible, contenedorCarrito);
    contenedor.append(contenedorImagenCol, contenedorDetalle);
}

//Carrito de compras


function agregarProductoAlCarrito(nombre, tallaSeleccionada, precio, cantidadProductos ) {
    let carrito = [];
    const productoSeleccionado = {
                                    nombre,
                                    tallaSeleccionada,
                                    precio,
                                    cantidadProductos
                                };

    localStorage.setItem('productoSeleccionado', JSON.stringify(productoSeleccionado));

    if( JSON.parse(localStorage.getItem('productoSeleccionado')) !== null ) {
        obj = JSON.parse(localStorage.getItem('productoSeleccionado'));
        console.log(obj);
        if( !JSON.parse(localStorage.getItem('carrito')) ) {
            carrito.push(obj);
        } else {
            carrito = JSON.parse(localStorage.getItem('carrito'));
            carrito.push(obj);
        }        

        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    console.log('Se añadio al carrito ');
}

function calcularTotal() {
    let precios = [];
    carrito = JSON.parse(localStorage.getItem('carrito'));
    carrito.forEach(({precio, cantidadProductos}) => {
        let precioCalculado = precio * cantidadProductos;
        precios.push(precioCalculado);
    } );
    let total = precios.reduce(getSum, 0);
    function getSum(total, num) {
        return parseInt(total) + parseInt(num);
    }
    return total;
}

function calcularCantidadTotal() {
    let carrito = [];
    let cantidades = [];
    carrito = JSON.parse(localStorage.getItem('carrito'));
    if (!carrito) {
        return 0;
    } else {    
        carrito.forEach(({ cantidadProductos}) => {
            cantidades.push(cantidadProductos);
        } );
        let total = cantidades.reduce(getSum, 0);
        function getSum(total, num) {
            return parseInt(total) + parseInt(num);
        }
        return total;
    }
}

function renderizarCarrito() {

    const contenedorProductosDeCarrito = document.createElement('div');
    contenedorProductosDeCarrito.classList.add('col');

    const tablaProductos = document.createElement('table');
    tablaProductos.classList.add('table');

    const tablaEncabezado = document.createElement('thead');

    const tablaFilaEncabezado = document.createElement('tr');

    const tablaFilaProducto = document.createElement('th');
    tablaFilaProducto.setAttribute('scope', 'col');
    tablaFilaProducto.setAttribute('colspan', '2');
    tablaFilaProducto.textContent = 'PRODUCTO';

    const tablaFilaPrecio = document.createElement('th');
    tablaFilaPrecio.setAttribute('scope', 'col');
    tablaFilaPrecio.textContent = 'PRECIO';

    const tablaFilaCantidad = document.createElement('th');
    tablaFilaCantidad.setAttribute('scope', 'col');
    tablaFilaCantidad.textContent = 'CANTIDAD';

    const tablaFilaTotal = document.createElement('th');
    tablaFilaTotal.setAttribute('scope', 'col');
    tablaFilaTotal.textContent = 'TOTAL';

    tablaFilaEncabezado.append(tablaFilaProducto, tablaFilaPrecio, tablaFilaCantidad, tablaFilaTotal );
    tablaEncabezado.append(tablaFilaEncabezado);

    const tablaCuerpo = document.createElement('tbody');        
    
    carrito = JSON.parse(localStorage.getItem('carrito'));
    carrito.forEach( ({ nombre, precio, cantidadProductos}) => {

        const tablaFilaCuerpo = document.createElement('tr');  
        const tablaFilaBotonEliminar = document.createElement('td');
        const BotonEliminar = document.createElement('input');
        BotonEliminar.classList.add('btn', 'btn-ligth', 'rounded-circle');
        BotonEliminar.setAttribute('type', 'button');
        BotonEliminar.setAttribute('value', '🗑️');
        tablaFilaBotonEliminar.append(BotonEliminar);
        tablaFilaBotonEliminar.addEventListener('click', () => {
            let indice = carrito.findIndex(({nombre}) => nombre === nombre);
            carrito.splice(indice,1);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            console.log(JSON.parse(localStorage.getItem('carrito')));
            console.log('Eliminar producto'+ nombre);
            location. reload();
        });

        const tablaFilaNombreProducto = document.createElement('th');
        tablaFilaNombreProducto.setAttribute('scope', 'row');
        tablaFilaNombreProducto.textContent = nombre;
        const tablaPrecioUnitario = document.createElement('td');
        tablaPrecioUnitario.textContent = precio;
        const tablaCantidadProductos = document.createElement('td');
        tablaCantidadProductos.textContent = cantidadProductos;
        const tablaPrecioTotal = document.createElement('td');
        tablaPrecioTotal.textContent =`${parseInt(cantidadProductos) * parseInt(precio)}`;

        tablaFilaCuerpo.append(tablaFilaBotonEliminar, tablaFilaNombreProducto, tablaPrecioUnitario, tablaCantidadProductos, tablaPrecioTotal);
        tablaCuerpo.append(tablaFilaCuerpo);
    });    

    const contenedorPrecioProductosDeCarrito = document.createElement('div');
    contenedorPrecioProductosDeCarrito.classList.add('col');

    const tablaResumen = document.createElement('table');
    tablaResumen.classList.add('table');

    const tablaResumenEncabezado = document.createElement('thead');

    const tablaFilaResumenEncabezado = document.createElement('tr');

    const tablaColumnaResumenEncabezado = document.createElement('th');
    tablaColumnaResumenEncabezado.setAttribute('scope', 'col');
    tablaColumnaResumenEncabezado.setAttribute('colspan', '2');
    tablaColumnaResumenEncabezado.textContent = 'TOTAL DEL CARRITO';

    tablaResumenEncabezado.append(tablaFilaResumenEncabezado);
    tablaFilaResumenEncabezado.append(tablaColumnaResumenEncabezado);

    const tablaResumenCuerpo = document.createElement('tbody');
    const tablaFilaResumen = document.createElement('tr');
    const tablaColumnaResumen = document.createElement('th');
    tablaColumnaResumen.setAttribute('scope','row');
    tablaColumnaResumen.textContent = 'Subtotal';

    const tablaColumna2Resumen = document.createElement('td');
    tablaColumna2Resumen.textContent = `S/. ${calcularTotal()}`;

    tablaResumenCuerpo.append(tablaFilaResumen);
    tablaFilaResumen.append(tablaColumnaResumen, tablaColumna2Resumen);
    tablaResumen.append(tablaResumenEncabezado, tablaResumenCuerpo);

    const contenedorBotonFinalizarCompra = document.createElement('div');
    contenedorBotonFinalizarCompra.classList.add('col-5', 'btn', 'btn-outline-success', 'text-center', 'align-items-center');
    contenedorBotonFinalizarCompra.addEventListener('click', () => {
        event.preventDefault();
        if( !JSON.parse(localStorage.getItem('usuario')) ) {
            alert('Debe iniciar sesión o crear una cuenta');
        } else {
            location.href = '../datos-facturacion.html';
        }
        console.log(calcularTotal());
        console.log('finalizar compra')})
    const enlaceBotonFinalizarCompra = document.createElement('a');
    enlaceBotonFinalizarCompra.setAttribute('href', '');
    enlaceBotonFinalizarCompra.textContent = 'FINALIZAR COMPRA';
    contenedorBotonFinalizarCompra.append(enlaceBotonFinalizarCompra);

    const contenedorBotonSeguirComprando = document.createElement('div');
    contenedorBotonSeguirComprando.classList.add('col-5', 'btn', 'btn-outline-success', 'text-center', 'align-items-center', 'm-2');
    const enlaceBotonSeguirComprando = document.createElement('a');
    enlaceBotonSeguirComprando.setAttribute('href', location.origin + '/pagina.html');
    enlaceBotonSeguirComprando.textContent = 'SEGUIR COMPRANDO';
    contenedorBotonSeguirComprando.append(enlaceBotonSeguirComprando);

    tablaProductos.append(tablaEncabezado, tablaCuerpo);
    contenedorProductosDeCarrito.append(tablaProductos);
    contenedorPrecioProductosDeCarrito.append(tablaResumen,contenedorBotonSeguirComprando,  contenedorBotonFinalizarCompra);

    contenedorCarritoPrincipal.append(contenedorProductosDeCarrito, contenedorPrecioProductosDeCarrito);
}

function paginaCarrito() {
    if (!calcularCantidadTotal()) {
        const mensajeCarritoVacio = document.createElement('div');
        mensajeCarritoVacio.textContent = 'Carrito vacio';
        contenedorCarritoPrincipal.append(mensajeCarritoVacio);
    } else {
        renderizarCarrito(); 
    }
}




