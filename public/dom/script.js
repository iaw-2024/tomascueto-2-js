const datos = [
  {
    "nombre": "Escape from Tarkov",
    "genero": "Shooter táctico",
    "duracion": "Variable",
    "empresa": "Battlestate Games",
    "imagen":"https://assetsio.gnwcdn.com/Escape-from-Tarkov-header.jpg?width=690&quality=75&format=jpg&auto=webp"
  },
  {
    "nombre": "EA Sports FC 24",
    "genero": "Deportes",
    "duracion": "Variable",
    "empresa": "Electronic Arts",
    "imagen":"https://media.contentapi.ea.com/content/dam/ea/fc/common/fc-franchise-feature-image-16x9.jpg.adapt.crop191x100.1200w.jpg"
  },
  {
    "nombre": "Grand Theft Auto IV",
    "genero": "Acción/Aventura",
    "duracion": "Variable",
    "empresa": "Rockstar Games",
    "imagen":"https://media.vandal.net/i/1280x720/11-2021/2021111011365954_1.jpg.webp"
  },
  {
    "nombre": "Counter-Strike 1.6",
    "genero": "Shooter en primera persona",
    "duracion": "Variable",
    "empresa": "Valve Corporation",
    "imagen":"https://i0.wp.com/www.ardilu.com/wp-content/uploads/2023/10/counter-strike-1.6_original.webp?ssl=1"
  }
]




buildList();

/*
  Función para construir la lista teniendo de base el html.
  Todas las propiedades fueron sacadas de una lista hecha
    con bootstrap, la cual rodeaba a cada list-item con varios
    divs. Por eso esta función termina creando todos los divs
    y les da estilo utilizando el DOM.
  
  Además, es acá que leo los datos de mi JSON importado 
  (no fetch al server) y los coloco en donde corresponda.

*/

async function buildList() {
  const container = document.getElementById('list-container');
  const lista = document.createElement('ul');
  container.appendChild(lista);
  lista.id = "lista";
  lista.classList.add('list-group','shadow');


  
    
  datos.forEach(item => {

      // Obtener la referencia al elemento ul donde se agregarán los list items
    const lista = document.getElementById('lista');



    // Crear el list item
    
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    // Crear el contenido personalizado
    const customContent = document.createElement('div');
    customContent.classList.add('media', 'align-items-lg-center', 'flex-column', 'flex-lg-row', 'p-3');

    // Crear el cuerpo de la media
    const mediaBody = document.createElement('div');
    mediaBody.classList.add('media-body', 'order-2', 'order-lg-1');

    // Crear el título h5
    const nombreJuego = document.createElement('h5');
    nombreJuego.classList.add('mt-0', 'font-weight-bold', 'mb-2');
    nombreJuego.textContent = item.nombre;
    mediaBody.appendChild(nombreJuego);

    // Crear el párrafo p
    const genero = document.createElement('p');
    genero.classList.add('font-italic', 'text-muted', 'mb-0', 'small');
    genero.textContent = item.genero;
    mediaBody.appendChild(genero);
  

    // Crear el div d-flex
    const divFlex = document.createElement('div');
    divFlex.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'mt-1');

  
    const empresa = document.createElement('h6');
    empresa.classList.add('font-weight-bold', 'my-2');
    empresa.textContent = item.empresa;
    divFlex.appendChild(empresa);

    // Crear la lista ul list-inline
    const listaInline = document.createElement('ul');
    listaInline.classList.add('list-inline', 'small');

    // Crear los elementos de la lista li
    for (let i = 0; i < 5; i++) {
        const listItemInline = document.createElement('li');
        listItemInline.classList.add('list-inline-item', 'm-0');
        const icono = document.createElement('i');
        icono.classList.add('fa', i < 4 ? 'fa-star' : 'fa-star-o', i < 4 ? 'text-success' : 'text-gray');
        listItemInline.appendChild(icono);
        listaInline.appendChild(listItemInline);
    }

    // Agregar la lista ul list-inline al div d-flex
    divFlex.appendChild(listaInline);

    // Agregar el div d-flex al cuerpo de la media
    mediaBody.appendChild(divFlex);

    // Agregar el cuerpo de la media y la imagen al contenido personalizado
    customContent.appendChild(mediaBody);
    const imagen = document.createElement('img');


    imagen.src = item.imagen;
    imagen.alt = 'Generic placeholder image';
    imagen.width = '200';
    imagen.classList.add('float-end', 'order-1', 'order-lg-2');
    customContent.appendChild(imagen);

    // Agregar el contenido personalizado al list item
    listItem.appendChild(customContent);
    // Agregar el list item a la lista ul
    lista.appendChild(listItem);
    
  })

  
}