const detalleProductos = [
    {
        "id": "1",
        "marca": "Propia",
        "precio": "150",
        "descuento": "0.30",
        "tallas": [{"talla": "S",
                    "cantidad": 1}, 
                    {"talla": "M",
                    "cantidad": 1}, 
                    {"talla": "L",
                    "cantidad": 0}],
        "cantidad": 2,
        "rutaImagen": "./images/products/mujer-vestido-verde.jpg",
        "descripcion": `Vestido verde con rayas blancas, en tela.`,
        "categoria": 'vestidos',
    },
    {
        "id": "2",
        "marca": "Propia",
        "precio": "50",
        "descuento": "0.30",
        "tallas": [{"talla": "S",
                    "cantidad": 1}, 
                    {"talla": "M",
                    "cantidad": 1}, 
                    {"talla": "L",
                    "cantidad": 0}],
        "cantidad": 7,
        "rutaImagen": "./images/products/short-beige.jpg",
        "descripcion": `Short beige, perfecto para este clima caluroso`,
        "categoria": 'short',
    },
    {
        "id": "3",
        "marca": "Propia",
        "precio": "180",
        "descuento": "0.30",
        "tallas": [{"talla": "S",
                    "cantidad": 5}, 
                    {"talla": "M",
                    "cantidad": 2}, 
                    {"talla": "L",
                    "cantidad": 0}],
        "cantidad": 7,
        "rutaImagen": "./images/products/vestido-negro.jpg",
        "descripcion": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem iste voluptate fugiat, nulla nisi
        praesentium impedit totam amet adipisci vel eos laborum voluptates aspernatur ad hic? Quos aspernatur
        nostrum aut ea? Sunt sint soluta, iusto obcaecati harum necessitatibus sit, velit architecto sed
        doloremque porro nam voluptatem quos incidunt nesciunt sapiente eligendi adipisci voluptatibus. Soluta
        libero eaque quis illum alias quia error autem at cum neque, illo velit totam. Id nulla eum distinctio
        reiciendis ex beatae quisquam eligendi! Beatae ipsam rem ipsa sint iste corporis fugit deleniti totam
        consequatur maiores officiis, repellat facere rerum nostrum doloremque ducimus error eligendi
        asperiores!`,
        "categoria": 'vestidos',
    },
    {
        "id": "4",
        "marca": "Propia",
        "precio": "150",
        "descuento": "0.30",
        "tallas": [{"talla": "S",
                    "cantidad": 1}, 
                    {"talla": "M",
                    "cantidad": 1}, 
                    {"talla": "L",
                    "cantidad": 0}],
        "cantidad": 2,
        "rutaImagen": "./images/products/vestido-primavera.jpg",
        "descripcion": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem iste voluptate fugiat, nulla nisi
        praesentium impedit totam amet adipisci vel eos laborum voluptates aspernatur ad hic? Quos aspernatur
        nostrum aut ea? Sunt sint soluta, iusto obcaecati harum necessitatibus sit, velit architecto sed
        doloremque porro nam voluptatem quos incidunt nesciunt sapiente eligendi adipisci voluptatibus. Soluta
        libero eaque quis illum alias quia error autem at cum neque, illo velit totam. Id nulla eum distinctio
        reiciendis ex beatae quisquam eligendi! Beatae ipsam rem ipsa sint iste corporis fugit deleniti totam
        consequatur maiores officiis, repellat facere rerum nostrum doloremque ducimus error eligendi
        asperiores!`,
        "categoria": 'vestidos',
    },
    {
        "id": "5",
        "marca": "Propia",
        "precio": "70",
        "descuento": "0.30",
        "tallas": [{"talla": "S",
                    "cantidad": 1}, 
                    {"talla": "M",
                    "cantidad": 1}, 
                    {"talla": "L",
                    "cantidad": 0}],
        "cantidad": 2,
        "rutaImagen": "./images/products/blusa-verano.jpg",
        "descripcion": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem iste voluptate fugiat, nulla nisi
        praesentium impedit totam amet adipisci vel eos laborum voluptates aspernatur ad hic? Quos aspernatur
        nostrum aut ea? Sunt sint soluta, iusto obcaecati harum necessitatibus sit, velit architecto sed
        doloremque porro nam voluptatem quos incidunt nesciunt sapiente eligendi adipisci voluptatibus. Soluta
        libero eaque quis illum alias quia error autem at cum neque, illo velit totam. Id nulla eum distinctio
        reiciendis ex beatae quisquam eligendi! Beatae ipsam rem ipsa sint iste corporis fugit deleniti totam
        consequatur maiores officiis, repellat facere rerum nostrum doloremque ducimus error eligendi
        asperiores!`,
        "categoria": 'blusas',
    },
    {
        "id": "6",
        "marca": "Propia",
        "precio": "100",
        "descuento": "0.30",
        "tallas": [{"talla": "S",
                    "cantidad": 1}, 
                    {"talla": "M",
                    "cantidad": 1}, 
                    {"talla": "L",
                    "cantidad": 0}],
        "cantidad": 2,
        "rutaImagen": "./images/products/pantalon-blanco.jpg",
        "descripcion": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem iste voluptate fugiat, nulla nisi
        praesentium impedit totam amet adipisci vel eos laborum voluptates aspernatur ad hic? Quos aspernatur
        nostrum aut ea? Sunt sint soluta, iusto obcaecati harum necessitatibus sit, velit architecto sed
        doloremque porro nam voluptatem quos incidunt nesciunt sapiente eligendi adipisci voluptatibus. Soluta
        libero eaque quis illum alias quia error autem at cum neque, illo velit totam. Id nulla eum distinctio
        reiciendis ex beatae quisquam eligendi! Beatae ipsam rem ipsa sint iste corporis fugit deleniti totam
        consequatur maiores officiis, repellat facere rerum nostrum doloremque ducimus error eligendi
        asperiores!`,
        "categoria": 'pantalones',
    },
    {
        "id": "7",
        "marca": "Propia",
        "precio": "60",
        "descuento": "0.30",
        "tallas": [{"talla": "S",
                    "cantidad": 1}, 
                    {"talla": "M",
                    "cantidad": 1}, 
                    {"talla": "L",
                    "cantidad": 0}],
        "cantidad": 2,
        "rutaImagen": "./images/products/polo-blanco.jpg",
        "descripcion": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem iste voluptate fugiat, nulla nisi
        praesentium impedit totam amet adipisci vel eos laborum voluptates aspernatur ad hic? Quos aspernatur
        nostrum aut ea? Sunt sint soluta, iusto obcaecati harum necessitatibus sit, velit architecto sed
        doloremque porro nam voluptatem quos incidunt nesciunt sapiente eligendi adipisci voluptatibus. Soluta
        libero eaque quis illum alias quia error autem at cum neque, illo velit totam. Id nulla eum distinctio
        reiciendis ex beatae quisquam eligendi! Beatae ipsam rem ipsa sint iste corporis fugit deleniti totam
        consequatur maiores officiis, repellat facere rerum nostrum doloremque ducimus error eligendi
        asperiores!`,
        "categoria": 'polos',
    },

    {
        "id": "8",
        "marca": "Propia",
        "precio": "140",
        "descuento": "0.30",
        "tallas": [{"talla": "S",
                    "cantidad": 1}, 
                    {"talla": "M",
                    "cantidad": 1}, 
                    {"talla": "L",
                    "cantidad": 0}],
        "cantidad": 2,
        "rutaImagen": "./images/products/vestido-amarillo-brillante.jpg",
        "descripcion": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem iste voluptate fugiat, nulla nisi
        praesentium impedit totam amet adipisci vel eos laborum voluptates aspernatur ad hic? Quos aspernatur
        nostrum aut ea? Sunt sint soluta, iusto obcaecati harum necessitatibus sit, velit architecto sed
        doloremque porro nam voluptatem quos incidunt nesciunt sapiente eligendi adipisci voluptatibus. Soluta
        libero eaque quis illum alias quia error autem at cum neque, illo velit totam. Id nulla eum distinctio
        reiciendis ex beatae quisquam eligendi! Beatae ipsam rem ipsa sint iste corporis fugit deleniti totam
        consequatur maiores officiis, repellat facere rerum nostrum doloremque ducimus error eligendi
        asperiores!`,
        "categoria": 'vestidos',
    },
    {
        "id": "9",
        "marca": "Propia",
        "precio": "200",
        "descuento": "0.30",
        "tallas": [{"talla": "S",
                    "cantidad": 1}, 
                    {"talla": "M",
                    "cantidad": 1}, 
                    {"talla": "L",
                    "cantidad": 0}],
        "cantidad": 2,
        "rutaImagen": "./images/products/vestido-azul.jpg",
        "descripcion": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem iste voluptate fugiat, nulla nisi
        praesentium impedit totam amet adipisci vel eos laborum voluptates aspernatur ad hic? Quos aspernatur
        nostrum aut ea? Sunt sint soluta, iusto obcaecati harum necessitatibus sit, velit architecto sed
        doloremque porro nam voluptatem quos incidunt nesciunt sapiente eligendi adipisci voluptatibus. Soluta
        libero eaque quis illum alias quia error autem at cum neque, illo velit totam. Id nulla eum distinctio
        reiciendis ex beatae quisquam eligendi! Beatae ipsam rem ipsa sint iste corporis fugit deleniti totam
        consequatur maiores officiis, repellat facere rerum nostrum doloremque ducimus error eligendi
        asperiores!`,
        "categoria": 'vestidos',
    },
    {
        "id": "10",
        "marca": "Propia",
        "precio": "150",
        "descuento": "0.30",
        "tallas": [{"talla": "S",
                    "cantidad": 1}, 
                    {"talla": "M",
                    "cantidad": 1}, 
                    {"talla": "L",
                    "cantidad": 0}],
        "cantidad": 2,
        "rutaImagen": "./images/products/vestido-decorado-flores.jpg",
        "descripcion": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem iste voluptate fugiat, nulla nisi
        praesentium impedit totam amet adipisci vel eos laborum voluptates aspernatur ad hic? Quos aspernatur
        nostrum aut ea? Sunt sint soluta, iusto obcaecati harum necessitatibus sit, velit architecto sed
        doloremque porro nam voluptatem quos incidunt nesciunt sapiente eligendi adipisci voluptatibus. Soluta
        libero eaque quis illum alias quia error autem at cum neque, illo velit totam. Id nulla eum distinctio
        reiciendis ex beatae quisquam eligendi! Beatae ipsam rem ipsa sint iste corporis fugit deleniti totam
        consequatur maiores officiis, repellat facere rerum nostrum doloremque ducimus error eligendi
        asperiores!`,
        "categoria": 'vestidos',
    },
    {
        "id": "11",
        "marca": "Propia",
        "precio": "150",
        "descuento": "0.30",
        "tallas": [{"talla": "S",
                    "cantidad": 1}, 
                    {"talla": "M",
                    "cantidad": 1}, 
                    {"talla": "L",
                    "cantidad": 0}],
        "cantidad": 2,
        "rutaImagen": "./images/products/vestido-rosa.jpg",
        "descripcion": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem iste voluptate fugiat, nulla nisi
        praesentium impedit totam amet adipisci vel eos laborum voluptates aspernatur ad hic? Quos aspernatur
        nostrum aut ea? Sunt sint soluta, iusto obcaecati harum necessitatibus sit, velit architecto sed
        doloremque porro nam voluptatem quos incidunt nesciunt sapiente eligendi adipisci voluptatibus. Soluta
        libero eaque quis illum alias quia error autem at cum neque, illo velit totam. Id nulla eum distinctio
        reiciendis ex beatae quisquam eligendi! Beatae ipsam rem ipsa sint iste corporis fugit deleniti totam
        consequatur maiores officiis, repellat facere rerum nostrum doloremque ducimus error eligendi
        asperiores!`,
        "categoria": 'vestidos',
    },
    {
        "id": "12",
        "marca": "Propia",
        "precio": "150",
        "descuento": "0.30",
        "tallas": [{"talla": "S",
                    "cantidad": 1}, 
                    {"talla": "M",
                    "cantidad": 1}, 
                    {"talla": "L",
                    "cantidad": 0}],
        "cantidad": 2,
        "rutaImagen": "./images/products/vestido-verano.jpg",
        "descripcion": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem iste voluptate fugiat, nulla nisi
        praesentium impedit totam amet adipisci vel eos laborum voluptates aspernatur ad hic? Quos aspernatur
        nostrum aut ea? Sunt sint soluta, iusto obcaecati harum necessitatibus sit, velit architecto sed
        doloremque porro nam voluptatem quos incidunt nesciunt sapiente eligendi adipisci voluptatibus. Soluta
        libero eaque quis illum alias quia error autem at cum neque, illo velit totam. Id nulla eum distinctio
        reiciendis ex beatae quisquam eligendi! Beatae ipsam rem ipsa sint iste corporis fugit deleniti totam
        consequatur maiores officiis, repellat facere rerum nostrum doloremque ducimus error eligendi
        asperiores!`,
        "categoria": 'vestidos',
    },
]
