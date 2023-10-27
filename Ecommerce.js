
//se filtran los productos en dos categorias.

let productosElectronicos = products.filter(producto => producto.category === "electronics");
let productosJoyas = products.filter(producto => producto.category === "jewelery");

let listaMostrar

// se crea una function con la funcion de organizar alfabeticamente y se construye una cadena de texto que separa a los productos con items.

function organizarAlfabeticamente(array) {
    array.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        } else if (a.title > b.title) {
            return 1;
        } else {
            return 0;
        }
    });

    let lista_productos = "";

    for (let i = 0; i < array.length; i++) {
        lista_productos += (i + 1) + ") " + array[i].title;

        if (i < array.length - 1) {
            lista_productos += "\n";
        }
    }

    return lista_productos;
}

// Se le da la bienvenida al usuario.

alert("Bienvenido a mi ecommerse!!");
alert("Actualmente solo tenemos dos categorias. Ingrese la deseada.");

// permito al usuario elegir en que categoria de productos esta interesado.
let usuarioInput = prompt("(1) - electronicos (2) - joyas ");


if (usuarioInput === "1") {

    listaMostrar = organizarAlfabeticamente(productosElectronicos);

    let compra = parseInt(prompt(`Eliga que producto electronico desea comprar:\n${listaMostrar}`));

    if (isNaN(compra)) {
        alert("Gracias por visitarnos, vuelva pronto !");
    } else {
        while (compra < 1 || compra > 6) {
            alert("No hemos podido encontrar dicho producto, intente ingresarlo nuevamente.")
            compra = parseInt(prompt(`Eliga que producto electronico desea comprar:\n${listaMostrar}`));
        }
    }

    const nombres_electronicos = productosElectronicos.map(producto => producto.title);

    const producto_nombre = nombres_electronicos[compra - 1]

    producto_seleccionado = products.find(producto => producto.title === producto_nombre)

    // se muestra un confirm ncon detalles del producto.

    const confirm_compra = confirm(`Nombre: ${producto_seleccionado.title}\n\n Descripción: ${producto_seleccionado.description}\n\n Precio: $${producto_seleccionado.price}\n¿Desea completar la compra?`)
    
    // Si el usuario confirma la compra, se calcula y muestra la fecha de entrega.
    
    if (confirm_compra){
        const fechaActual = new Date();
        fechaActual.setDate(fechaActual.getDate() + 7);
        alert ("Gracias por su compra! Deberia recibir el producto en la siguiente fecha: " + fechaActual.toDateString())

    }else{
        alert ("Gracias por visitarnos, vuelva pronto !")
    }

} else if (usuarioInput === "2") {

    listaMostrar = organizarAlfabeticamente(productosJoyas);

    let compra = parseInt(prompt(`Eliga que producto desea comprar:\n${listaMostrar}`));

    if (isNaN(compra)) {
        alert("Gracias por visitarnos, vuelva pronto !");
    } else {
        while (compra < 1 || compra > 6) {
            alert("No hemos podido encontrar dicho producto, intente ingresarlo nuevamente.")
            compra = parseInt(prompt(`Eliga que producto electronico desea comprar:\n${listaMostrar}`));
        }
    }

    const nombres_joyas = productosJoyas.map(producto => producto.title);

    const producto_nombre = nombres_joyas[compra - 1]

    producto_seleccionado = products.find(producto => producto.title === producto_nombre)

    // se muestra un confirm ncon detalles del producto.

    const confirm_compra = confirm(`Nombre: ${producto_seleccionado.title}\n\n Descripción: ${producto_seleccionado.description}\n\n Precio: $${producto_seleccionado.price}\n¿Desea completar la compra?`)
    
    // Si el usuario confirma la compra, se calcula y muestra la fecha de entrega.
    
    if (confirm_compra){
        const fechaActual = new Date();
        fechaActual.setDate(fechaActual.getDate() + 7);
        alert ("Gracias por su compra! Deberia recibir el producto en la siguiente fecha: " + fechaActual.toDateString())

    }else{
        alert ("Gracias por visitarnos, vuelva pronto !")
    }
}else {
    // si el usuario ingresa un valor que no sea 1 o 2 se ejecuta un bucle hasta una entrada valida.
    while(usuarioInput !== "1" && usuarioInput !== "2") {
        alert("Ingresó un número inválido. Vuelva a intentarlo.");
        usuarioInput = prompt("(1) - electronicos (2) - joyas ");
    }
}








