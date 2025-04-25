let carrito = [];

function agregarCarrito(producto) {
    carrito.push(producto);
    alert(producto + ' agregado al carrito');
    console.log('Carrito:', carrito);
}

const img = document.getElementById('img-rotate');


img.addEventListener('mouseover', () => {
    img.style.transform = 'rotate(360deg)'; 
});

img.addEventListener('mouseout', () => {
    img.style.transform = 'rotate(0deg)'; // Restaura la rotación
});

