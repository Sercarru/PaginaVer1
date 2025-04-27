const menu = document.getElementById('menu_nav');
const indicador = document.getElementById('opcionSeleccionada');
const secciones = document.querySelectorAll('.seccion');

let tamanoIndicador = menu.querySelectorAll('a')[1].offsetHeight;

indicador.style.height = tamanoIndicador + 20 + 'px';

let indexSeccionActiva;

const observer = new IntersectionObserver((entradas,observer) => {
    entradas.forEach(entrada => {
        //console.log(tamanoIndicador);
        if (entrada.isIntersecting) {
            indexSeccionActiva = [...secciones].indexOf(entrada.target);

            indicador.style.transform = `translateY(${(tamanoIndicador+20) * indexSeccionActiva}px)`;
        }
    });
}, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.75
});

observer.observe(document.getElementById('menu_nav'));
secciones.forEach(seccion => observer.observe(seccion));

const onResize = () => {
    tamanoIndicador = menu.querySelector('a')[1].offsetHeight;
    indicador.style.height = `${tamanoIndicador}px`;
    indicador.style.transform = `translateY(${tamanoIndicador * indexSeccionActiva}px)`; 
}

window.addEventListener('resize', onResize);