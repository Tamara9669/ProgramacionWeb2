// Arreglo para almacenar los productos seleccionados
let carrito = [];

// Objeto JSON que contiene los productos y sus precios
const productos = {
    "1": { nombre: "Camisa", precio: 500 },
    "2": { nombre: "Pantalón", precio: 800 },
    "3": { nombre: "Zapatos", precio: 1200 },
    "4": { nombre: "Sombrero", precio: 200 },
    "5": { nombre: "Cartera", precio: 300 }
};

// Función para mostrar el menú de productos al iniciar
function mostrarMenu() {
    let seleccion = prompt(
        "Seleccione un producto para agregar al carrito:\n" +
        "1. Camisa - $300\n" +
        "2. Pantalón - $500\n" +
        "3. Zapatos - $800\n" +
        "4. Sombrero - $200\n" +
        "5. Ver Carrito y Total\n" +
        "6. Cancelar Compra"
    );

    // Evaluar la opción seleccionada
    switch (seleccion) {
        case "1":
        case "2":
        case "3":
        case "4":
            agregarAlCarrito(seleccion);
            break;
        case "5":
            verCarritoYTotal();
            break;
        case "6":
            cancelarCompra();
            break;
        default:
            console.log("Opción no válida. Intente de nuevo.");
            mostrarMenu();
    }
}

// Función para agregar productos al carrito
function agregarAlCarrito(opcion) {
    const productoSeleccionado = productos[opcion].nombre;
    carrito.push(productos[opcion]);
    
    // Mostrar mensaje en consola
    console.log(`Producto "${productoSeleccionado}" agregado al carrito.`);
    
    mostrarMenu();
}

// Función para ver el contenido del carrito y el total
function verCarritoYTotal() {
    if (carrito.length === 0) {
        aconsole.log("El carrito está vacío.");
    } else {
        let mensajeCarrito = "Carrito de compras:\n";
        let total = 0;

        carrito.forEach(producto => {
            mensajeCarrito += `${producto.nombre} - $${producto.precio}\n`;
            total += producto.precio;
        });

        mensajeCarrito += `\nTotal: $${total}`;
        console.log(mensajeCarrito);
    }
    mostrarMenu();
}

// Función para cancelar la compra (vaciar el carrito)
function cancelarCompra() {
    const confirmacion = prompt("¿Está seguro que desea cancelar la compra? (si/no)");

    if (confirmacion.toLowerCase() === "si") {
        carrito = [];
        console.log("El carrito ha sido vaciado.");
    } else {
        console.log("La compra no ha sido cancelada.");
    }
    mostrarMenu();
}


mostrarMenu();