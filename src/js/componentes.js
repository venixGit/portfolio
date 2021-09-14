
const header      = document.querySelector('header');
const menuToggle  = document.querySelector('.menuToggle');
const navegacion  = document.querySelector('.navigation');
const home        = document.querySelector('.inicio');
const about       = document.querySelector('.acerca');
const skills      = document.querySelector('.habilidad');
const projects    = document.querySelector('.proyecto');


/*--------------EVENTOS--------------- */
const stickyNav = () => {
    window.addEventListener('scroll', () => {
        header.classList.toggle("sticky", window.scrollY > 0 );
    });
}

const menuDesplegable = () => {
    menuToggle.addEventListener('click', () => {
        console.log('Esta cargando');
        menuToggle.classList.toggle('active');
        navegacion.classList.toggle('active');
    });
}

const holaMundo = () => {
    console.log("ES EL HOME",)
}

const ejecutarMenu = () => {
    if(home.addEventListener){
        home.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navegacion.classList.remove('active');
        });
    }
}

export const init = () => {
    stickyNav();
    menuDesplegable();
    ejecutarMenu();
}