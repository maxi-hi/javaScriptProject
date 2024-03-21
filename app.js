// Función para calcular el costo total de productos seleccionados
function calcularCostoTotal(productos) {
  let costoTotal = 0;
  for (let producto of productos) {
    costoTotal += producto.precio;
  }
  return costoTotal;
}

// Función para solicitar al usuario los productos y sus precios
function solicitarProductos() {
  const productos = [];
  let continuar = true;
  while (continuar) {
    const nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    // Validar si el precio ingresado es un número válido
    while (isNaN(precio) || precio <= 0) {
      alert("Por favor, ingrese un precio válido.");
      precio = parseFloat(prompt("Ingrese el precio del producto:"));
    }

    productos.push({ nombre, precio });
    continuar = confirm("¿Desea agregar otro producto?");
  }
  return productos;
}

// Función para mostrar resultados en el DOM
function mostrarResultados(productosSeleccionados, costoTotal) {
  const resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = `
    <h2>Costo total de los productos seleccionados: $${costoTotal.toFixed(2)}</h2>
    <h3>Lista de productos seleccionados:</h3>
    <ul>
      ${productosSeleccionados.map(producto => `<li>${producto.nombre} - $${producto.precio.toFixed(2)}</li>`).join('')}
    </ul>
  `;
}

// Evento al hacer clic en el botón para solicitar productos
document.getElementById('solicitarProductosBtn').addEventListener('click', () => {
  const productosSeleccionados = solicitarProductos();
  const costoTotal = calcularCostoTotal(productosSeleccionados);
  mostrarResultados(productosSeleccionados, costoTotal);
  // Almacenar datos en el LocalStorage
  localStorage.setItem('productosSeleccionados', JSON.stringify(productosSeleccionados));
  localStorage.setItem('costoTotal', costoTotal);
});

// Cargar resultados desde el LocalStorage al cargar la página
window.addEventListener('load', () => {
  const productosSeleccionados = JSON.parse(localStorage.getItem('productosSeleccionados'));
  const costoTotal = parseFloat(localStorage.getItem('costoTotal'));
  if (productosSeleccionados && costoTotal) {
    mostrarResultados(productosSeleccionados, costoTotal);
  }
});
