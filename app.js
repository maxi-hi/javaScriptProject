// Funcion para calcular el costo total de productos seleccionados
function calcularCostoTotal(productos) {
  let costoTotal = 0;
  for (let producto of productos) {
      costoTotal += producto.precio;
  }
  return costoTotal;
}

// Funcion para solicitar al usuario los productos y sus precios
function solicitarProductos() {
  const productos = [];
  let continuar = true;
  while (continuar) {
      const nombre = prompt("Ingrese el nombre del producto:");
      const precio = parseFloat(prompt("Ingrese el precio del producto:"));
      productos.push({ nombre, precio });
      continuar = confirm("¿Desea agregar otro producto?");
  }
  return productos;
}

// Funcion para buscar un producto por su nombre
function buscarProductoPorNombre(productos, nombreProducto) {
  return productos.filter(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());
}

// Permite su uso
alert("Bienvenido al simulador de costo total de productos.");
const productosSeleccionados = solicitarProductos();
const costoTotal = calcularCostoTotal(productosSeleccionados);
alert("El costo total de los productos seleccionados es: $" + costoTotal.toFixed(2));

// Preguntar si es que  el usuario quiere ver la lista de productos
const verLista = confirm("¿Desea ver la lista de productos seleccionados?");
if (verLista) {
  let listaProductos = "Lista de productos seleccionados:\n";
  for (let producto of productosSeleccionados) {
      listaProductos += producto.nombre + " - $" + producto.precio.toFixed(2) + "\n";
  }
  alert(listaProductos);
}

// Buscar los productos por nombre
const buscarProductos = confirm("¿Desea buscar productos por nombre?");
if (buscarProductos) {
  let continuarBusqueda = true;
  while (continuarBusqueda) {
      const nombreABuscar = prompt("Ingrese el nombre del producto que desea buscar:");
      const productosEncontrados = buscarProductoPorNombre(productosSeleccionados, nombreABuscar);
      if (productosEncontrados.length > 0) {
          let resultados = "Productos encontrados:\n";
          for (let producto of productosEncontrados) {
              resultados += producto.nombre + " - $" + producto.precio.toFixed(2) + "\n";
          }
          alert(resultados);
      } else {
          alert("El producto no fue encontrado.");
      }
      continuarBusqueda = confirm("¿Desea buscar otro producto?");
  }
}


//bien habia hecho esto en la anterior pre-entrega y lo lleve un poco mas alla agregando lo que solicitaron creeria yo, aclaro como siempre que muchas de las cosas las tengo que repasar de las clases o goolear y nada, es medio complicado pero bueno se intento.