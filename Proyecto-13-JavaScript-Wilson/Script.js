
let progreso = document.querySelector('.progreso')
let porcentaje = document.querySelector('.porcentaje')
let celebracion = document.querySelector('body')

/* Inicializa la variable que rastrea el progreso de la barra */
let avance = 0

/* Crea un intervalo que se ejecuta cada 40 milisegundos */
let tiempo = setInterval(() => {
    /* Incrementa el valor de avance en 1 en 1 */
    avance += 1

    /* Actualiza el ancho de la barra de progreso para reflejar el progreso actual */
    progreso.style.width = `${avance}%`

    /* Verifica si el progreso ha alcanzado el 100% */
    if (avance === 100) {
        /* Detiene el intervalo cuando el progreso llega al 100% */
        clearInterval(tiempo)

        /* Agrega la clase 'celebracion' al elemento <body> */
        celebracion.classList.add('celebracion')
    }

    /* Actualiza el contenido del elemento del porcentaje para mostrar el valor actual */
    porcentaje.textContent = `${avance}%`
}, 40);
