document.addEventListener('DOMContentLoaded', function() {
  const productos = [
    {
      id: 1,
      categoria: "bateria",
      nombre: "Tom 1 Color Vino  Tinto",
      precio: 699000,
      imagenes: ["imagenes proyectoh/tombo.jpg"],
      descripcion: "Este maravilloso tambor Vino tinto de la marca X-Pro ofrece una increíble calidad."
    },
    {
      id: 2,
      categoria: "bateria",
      nombre: "Piezas para sostener toms para batería",
      precio: 100000,
      imagenes: ["imagenes proyectoh/piezas.jpg"],
      descripcion: "Estas piezas ayudan a la hora de sostener toms de batería"
    },
    {
      id: 3,
      categoria: "tambores",
      nombre: "Bongos sencillos de madera pulida",
      precio: 350000,
      imagenes: ["imagenes proyectoh/bongos.jpg"],
      descripcion: "Estos bongos para ser de material sencillo, ofrece una buena respuesta musical"
    },
    {
      id: 4,
      categoria: "pedales",
      nombre: "Pedal para Bombo - Batería",
      precio: 100000,
      imagenes: ["imagenes proyectoh/pedal1.jpg"],
      descripcion: "Este pedal ofrece una buena respuesta para que lo utilices en tu Batería"
    },
    {
      id: 5,
      categoria: "platillos",
      nombre: "Base para platillos",
      precio: 178000,
      imagenes: ["imagenes proyectoh/basepla.jpg"],
      descripcion: "Base de platillos de buena calidad"
    },
    {
      id: 6,
      categoria: "bateria",
      nombre: "Baquetas para batería 5A",
      precio: 30000,
      imagenes: ["imagenes proyectoh/baquetas.jpg"],
      descripcion: "Increíbles baquetas para tu batería de buena calidad, medida 5A"
    },
    {
      id: 7,
      categoria: "bateria",
      nombre: "Bombo para batería con parches EVANS",
      precio: 800000,
      imagenes: ["imagenes proyectoh/bombo1.jpg"],
      descripcion: "Bombo para bateria con parches usados en buen estado, marca EVANS"
    },
    {
      id: 8,
      categoria: "panderos",
      nombre: "Pandero color negro sencillo",
      precio: 40000,
      imagenes: ["imagenes proyectoh/pandero.jpg"],
      descripcion: "El K&M 18880 es un atril para partituras resistente y ajustable. Perfecto para músicos de todos los niveles."
    },
    {
      id: 9,
      categoria: "sillas",
      nombre: "Silla para batería sencilla",
      precio: 40000,
      imagenes: ["imagenes proyectoh/silla1.jpg"],
      descripcion: "Silla de buena calidad"
    },
    

{
    id: 10,
    categoria: "bateria",
    nombre: "Pad para práctica",
    precio: 49000,
    imagenes: ["imagenes proyectoh/pad.jpg"],
    descripcion: "Pad para practicar redobles"
  },
  {
    id: 11,
    categoria: "bateria",
    nombre: "Bombo para bateria parches JW",
    precio: 800000,
    imagenes: ["imagenes proyectoh/bombo2.jpg"],
    descripcion: "Bombo para batería con parches JW de buena calidad"
  },
  {
    id: 12,
    categoria: "bateria",
    nombre: "Bombo para batería Z Percussion",
    precio: 849000,
    imagenes: ["imagenes proyectoh/bombo3.jpg"],
    descripcion: "Bombo para batería con parches Z PERCUSSION de buena calidad"
  },
  {
    id: 13,
    categoria: "pedales",
    nombre: "Doble pedalera para batería",
    precio: 599000,
    imagenes: ["imagenes proyectoh/doblep.jpg"],
    descripcion: "Doble pedal para batería de buena calidad en buen estado, nueva."
  },
  {
    id: 14,
    categoria: "parches",
    nombre: "Parches REMO nuevos",
    precio: 100000,
    imagenes: ["imagenes proyectoh/remo.jpg"],
    descripcion: "Parches remo de buena calidad"
  },
  {
    id: 15,
    categoria: "tambores",
    nombre: "Tambor para percusionista - Música del pacifico",
    precio: 149000,
    imagenes: ["imagenes proyectoh/tambor1.jpg"],
    descripcion: "Tambor para música del pacifico de buena calidad."
  },
  {
    id: 16,
    categoria: "bateria",
    nombre: "Baquetas para batería marca VIC",
    precio: 35000,
    imagenes: ["imagenes proyectoh/baquetas2.jpg"],
    descripcion: "Baquetas para batería marca VIC nuevas."
  },
  {
    id: 17,
    categoria: "platillos",
    nombre: "Set de Platillos Zudjian ",
    precio: 1200000,
    imagenes: ["imagenes proyectoh/platillos.jpg"],
    descripcion: "Set de platillos Zudjian en buen estado."
  },
  {
    id: 18,
    categoria: "bateria",
    nombre: "Bombo para Batería con parches EVANS",
    precio: 1000000,
    imagenes: ["imagenes proyectoh/bombo4.jpg"],
    descripcion: "Bombo para batería con parches EVANS de buena calidad."
  },
  {
    id: 19,
    categoria: "sonido",
    nombre: "Set de Microfonos para batería",
    precio: 2000000,
    imagenes: ["imagenes proyectoh/micros.jpg"],
    descripcion: "Set de microfonos para batería en buen estado."
  },


  {
    id: 20,
    categoria: "bateria",
    nombre: "Redoblante Millemium color dorado",
    precio: 500000,
    imagenes: ["imagenes proyectoh/redo1.jpg"],
    descripcion: "Redoblante de marca Millemium color dorado en buen estado."
  },
  {
    id: 21,
    categoria: "bateria",
    nombre: "Bombo para batería marca SONOR",
    precio: 1000000,
    imagenes: ["imagenes proyectoh/bombo5.jpg"],
    descripcion: "Bombo de marca SONOR en buen estado."
  },
  {
    id: 22,
    categoria: "sonido",
    nombre: "Set de Microfonos TAKSTAR",
    precio: 1000000,
    imagenes: ["imagenes proyectoh/micros2.jpg"],
    descripcion: "Set de microfonos TAKSTAR en buen estado."
  },
  {
    id: 23,
    categoria: "parches",
    nombre: "Set de Parches EVANS color NEGRO",
    precio: 400000,
    imagenes: ["imagenes proyectoh/parches1.jpg"],
    descripcion: "Parches para batería marca EVANS color negro."
  },
  {
    id: 24,
    categoria: "bateria",
    nombre: "Bombo para batería con parches PEARL",
    precio: 1000000,
    imagenes: ["imagenes proyectoh/bombo6.jpg"],
    descripcion: "Bombo para batería con parches PEARL en buen estado."
  },
  {
    id: 25,
    categoria: "bateria",
    nombre: "Kit para practicar - Pads electrónicos",
    precio: 600000,
    imagenes: ["imagenes proyectoh/kit1.jpg"],
    descripcion: "Este kit para practicar Batería con pads electronicos."
  },
  {
    id: 26,
    categoria: "platillos",
    nombre: "Platillo Crash Sabian",
    precio: 400000,
    imagenes: ["imagenes proyectoh/crash1.jpg"],
    descripcion: "Platillo Crash Sabian nuevo."
  },
  {
    id: 27,
    categoria: "tambores",
    nombre: "Tambor Alegre",
    precio: 1500000,
    imagenes: ["imagenes proyectoh/tambor2.jpg"],
    descripcion: "Tambor Alegre para música cultura."
  },
  {
    id: 28,
    categoria: "bateria",
    nombre: "Redoblante Gris nuevo",
    precio: 400000,
    imagenes: ["imagenes proyectoh/redo2.jpg"],
    descripcion: "Redoblante color gris nuevo."
  },
  {
    id: 29,
    categoria: "platillos",
    nombre: "Base para platillo Raid",
    precio: 1500000,
    imagenes: ["imagenes proyectoh/base2.jpg"],
    descripcion: "Base para platillo girable para Raid."
  },

  {
    id: 31,
    categoria: "bateria",
    nombre: "Tom 2 batería acústica",
    precio: 350000,
    imagenes: ["imagenes proyectoh/tom2.jpg"],
    descripcion: "Tom 2 para batería color Vino tinto."
  },
  {
    id: 32,
    categoria: "instrumento de aire",
    nombre: "Saxofón",
    precio: 199000,
    imagenes: ["imagenes proyectoh/saxo1.jpg"],
    descripcion: "Safoxón en perfecto estado, nuevo."
  },
  {
    id: 33,
    categoria: "platillos",
    nombre: "Platillo para batería 8x",
    precio: 150000,
    imagenes: ["imagenes proyectoh/8x.jpg"],
    descripcion: "Platillo para batería 8X"
  },
  {
    id: 34,
    categoria: "platillos",
    nombre: "Zudjian Planet Raid",
    precio: 200000,
    imagenes: ["imagenes proyectoh/Zud1.jpg"],
    descripcion: "Platillo Zudjian Planet Raid"
  },
  {
    id: 35,
    categoria: "tambores",
    nombre: "Bongos Estilo Galaxy",
    precio: 2000000,
    imagenes: ["imagenes proyectoh/bongos2.jpg"],
    descripcion: "Bongos Galaxy nuevos."
  },

  {
    id: 37,
    categoria: "bateria",
    nombre: "Pad Galaxy Zudjian",
    precio: 230000,
    imagenes: ["imagenes proyectoh/padZ.jpg"],
    descripcion: "Pad para batería Galaxy Zudjian."
  },
  {
    id: 38,
    categoria: "bateria",
    nombre: "Batería 5 piezas DMC",
    precio: 950000,
    imagenes: ["imagenes proyectoh/bateriaDMC.jpg"],
    descripcion: "Batería 5 piezas DMC"
  },
  {
    id: 39,
    categoria: "bateria",
    nombre: "Batería TAMA",
    precio: 2000000,
    imagenes: ["imagenes proyectoh/tama1.jpg"],
    descripcion: "Batería 5 piezas TAMA"
  },
  {
    id: 40,
    categoria: "bateria",
    nombre: "Base para redoblante nueva",
    precio: 100000,
    imagenes: ["imagenes proyectoh/baser.jpg"],
    descripcion: "Base para redoblante nueva y de buena calidad."
  },



  {
    id: 41,
    categoria: "bateria",
    nombre: "Redoblante dorado en perfecto estado",
    precio: 500000,
    imagenes: ["imagenes proyectoh/red3.jpg"],
    descripcion: "Redoblante dorado en perfecto estado."
  },
  {
    id: 42,
    categoria: "platillos",
    nombre: "Platillo marca PA nuevo",
    precio: 1500000,
    imagenes: ["imagenes proyectoh/PAm.jpg"],
    descripcion: "Platillo PA nuevo - crash"
  },
  {
    id: 43,
    categoria: "sonido",
    nombre: "Audifonos para batería ",
    precio: 100000,
    imagenes: ["imagenes proyectoh/audi1.jpg"],
    descripcion: "Audifonos para tocar batería."
  },
  {
    id: 44,
    categoria: "pedales",
    nombre: "Pedal IRON COBRA",
    precio: 250000,
    imagenes: ["imagenes proyectoh/iron.jpg"],
    descripcion: "Pedal iron cobra nuevo."
  },
  {
    id: 45,
    categoria: "bateria",
    nombre: "Batería electrica 7 piezas",
    precio: 3000000,
    imagenes: ["imagenes proyectoh/electr.jpg"],
    descripcion: "Batería 7 piezas eléctrica."
  },
  {
    id: 46,
    categoria: "bateria",
    nombre: "Batería acustica MAPEX",
    precio: 2000000,
    imagenes: ["imagenes proyectoh/mapez.jpg"],
    descripcion: "Batería acústica MAPEX nueva."
  },
  {
    id: 47,
    categoria: "platillos",
    nombre: "Platillos SBR",
    precio: 125000,
    imagenes: ["imagenes proyectoh/sbr.jpg"],
    descripcion: "Platillos sbr nuevos"
  },
  {
    id: 48,
    categoria: "tambores",
    nombre: "Congas nuevas",
    precio: 800000,
    imagenes: ["imagenes proyectoh/congas.jpg"],
    descripcion: "Congas nuevas en perfecto estado."
  },
  {
    id: 49,
    categoria: "pedales",
    nombre: "Batería PEARL 4 piezas",
    precio: 2000000,
    imagenes: ["imagenes proyectoh/pearl2.jpg"],
    descripcion: "Batería 4 piezas marca pearl en perfecto estado, usada."
  },
  {
    id: 50,
    categoria: "tambores",
    nombre: "Congas CP Travel",
    precio: 1400000,
    imagenes: ["imagenes proyectoh/congas2.jpg"],
    descripcion: "Congas nuevas en perfecto estado CP Travel."
  },
];
const productosContainer = document.getElementById('productos-container');
const paginacionContainer = document.getElementById('paginacion-container');
const productosPorPagina = 15;
let paginaActual = 1;

function mostrarProductos() {
  productosContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar los productos

  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = productos.slice(inicio, fin);

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container'); // Asegúrate de tener estilos para .grid-container

  productosPagina.forEach(producto => {
    const productoElement = document.createElement('div');
    productoElement.classList.add('producto');

    const imagenElement = document.createElement('img');
    imagenElement.src = producto.imagenes[0]; 
    imagenElement.alt = producto.nombre;

    const nombreElement = document.createElement('h3');
    nombreElement.textContent = producto.nombre;

    const precioElement = document.createElement('p');
    precioElement.textContent = `Precio: $${producto.precio}`;

    const descripcionElement = document.createElement('p');
    descripcionElement.textContent = producto.descripcion;

    productoElement.appendChild(imagenElement);
    productoElement.appendChild(nombreElement);
    productoElement.appendChild(precioElement);
    productoElement.appendChild(descripcionElement);

    gridContainer.appendChild(productoElement);
  });

  productosContainer.appendChild(gridContainer);
}

function mostrarPaginacion() {
  const numPaginas = Math.ceil(productos.length / productosPorPagina);
  paginacionContainer.innerHTML = ''; // Limpiar la paginación antes de agregar los botones

  for (let i = 1; i <= numPaginas; i++) {
    const boton = document.createElement('button');
    boton.textContent = i;
    boton.classList.add('boton-paginacion'); // Asegúrate de tener estilos para .boton-paginacion
    boton.addEventListener('click', () => {
      paginaActual = i;
      mostrarProductos();
      mostrarPaginacion();
    });
    if (i === paginaActual) {
      boton.classList.add('activo'); // Estilo para el botón activo
    }
    paginacionContainer.appendChild(boton);
  }
}

mostrarProductos();
mostrarPaginacion();




});
