document.addEventListener("DOMContentLoaded", () => {
    const animacion = document.querySelector(".animacion");
    const foto = document.getElementById("foto");
    const musica = document.getElementById('audio');

    // Frases o versos que quieres mostrar
    const letras = [
        "tengo que decirte que antes que llegaras ya todo estaba preparado para enamorarte el tiempo que perdi, los besos que regale fueron necesarios para aprender que cuando te encontrara lo sabria tan solo con mirarte por primera vez",
         "dejame que tengo la receta para el resto de las cenas que nos quedan juntos dejame,las horas pasan como minutos entre tu y yo,Buscante encontre la fuente de la felicidad,las escenas que no quiero para para para vivilas contigo,buscandote",
         "te amo lucia",
    ];

    document.getElementById('boton').addEventListener('click', function() {
        musica.play(); // Reproduce la música
        foto.style.display = "block"; // Muestra la foto

        let i = 0;
        animacion.innerHTML = letras[i];
        const contenedor = document.querySelector('.contenedor');
        contenedor.classList.remove('expandir');
        void contenedor.offsetWidth;
        contenedor.classList.add('expandir');
        animacion.classList.remove('animar');
        void animacion.offsetWidth;
        animacion.classList.add('animar');

        // Cambia la letra cada 22 segundo
        const intervalo = setInterval(() => {
            i++;
            if (i < letras.length) {
                animacion.innerHTML = letras[i];
            } else {
                clearInterval(intervalo); // Detiene el cambio cuando termina
            }
        }, 22000);
    });
    animacion.addEventListener("click", () => {
        animacion.style.animation = "none";
        setTimeout(() => {
            animacion.style.animation = "efecto 2s infinite alternate";
        }, 100);
    });
});

function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.className = 'corazon';
    // Posición horizontal aleatoria
    corazon.style.left = Math.random() * 100 + 'vw';
    // Tamaño aleatorio
    const size = Math.random() * 20 + 20;
    corazon.style.width = size + 'px';
    corazon.style.height = size + 'px';
    corazon.style.background = 'red';
    corazon.style.animationDuration = (Math.random() * 2 + 4) + 's';
    document.body.appendChild(corazon);
    setTimeout(() => {
        corazon.remove();
    }, 7000);
}
setInterval(crearCorazon, 600);


