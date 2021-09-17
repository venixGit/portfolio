import { VanillaTilt } from './vanilla-tilt.js';
import {efectosJs} from './app.js';

const header      = document.querySelector('header');
const projects    = document.querySelector('.proyecto');
const menuMovil   = document.querySelector('.toMenu');
const btn         = document.querySelector('#btn');
const menu        = document.querySelectorAll('.menu');
const tarjeta     = document.querySelectorAll('.card');
const btnCv       = document.querySelector('#btnCv');
// const menuToggle  = document.querySelector('.menuToggle');
// const navegacion  = document.querySelector('.navigation');
// const home        = document.querySelector('.inicio');
// const about       = document.querySelector('.acerca');
// const skills      = document.querySelector('.habilidad');

/*--------------EVENTOS--------------- */
const stickyNav = () => {
    window.addEventListener('scroll', () => {
        header.classList.toggle("sticky", window.scrollY > 0 );
    });
}

/*Boton de menu para pantallas pequeñas */
const botonMenu = () => {
    btn.addEventListener('click', () => {
        menuMovil.classList.toggle('active');
        // console.log("hola mundo");
    });
}

/*Clase que activa el menu para pantallas pequeñas */
const menuLinks = () => {
    menu.forEach((event) => {
        event.addEventListener('click', () => {
            menuMovil.classList.toggle('active');
        });
    })
}

/*Animacion 3d de los projectos */
const animacionCard = () => {
    VanillaTilt.init( tarjeta, {
        max: 30,
        scale: 1.1,
        glare: true,
        "max-glare": 0.3
    });
}

/*Descargar cv en pdf */
const descargarArchivo = () => {
    btnCv.addEventListener('click', () => {
        
    });
}

const menuDesplegable = () => {
    // menuToggle.addEventListener('click', () => {
    //     console.log('Esta cargando');
    //     menuToggle.classList.toggle('active');
    //     navegacion.classList.toggle('active');
    // });
}
const desactivarMenu =() => {
    // menuToggle.classList.remove('active');
    // navegacion.classList.remove('active');
}
const ejecutarMenu = () => {
    // if(home.addEventListener){
    //     home.addEventListener('click', () => {
    //         desactivarMenu();
    //     });
    // }
    
    // if(about.addEventListener){
    //     about.addEventListener('click', () => {
    //         desactivarMenu();
    //     });
    // }

    // if(skills.addEventListener){
    //     skills.addEventListener('click', () => {
    //         desactivarMenu();
    //     });
    // }

    // if(projects.addEventListener){
    //     projects.addEventListener('click', () => {
    //         desactivarMenu();
    //     });
    // }
}

export const init = () => {
    stickyNav();
    menuDesplegable();
    botonMenu();
    menuLinks();
    animacionCard();
    efectosJs();
    // descargarArchivo();
    // particlesJS();
    // ejecutarMenu();
}