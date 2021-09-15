
const header      = document.querySelector('header');
// const menuToggle  = document.querySelector('.menuToggle');
const navegacion  = document.querySelector('.navigation');
const home        = document.querySelector('.inicio');
const about       = document.querySelector('.acerca');
const skills      = document.querySelector('.habilidad');
const projects    = document.querySelector('.proyecto');
const menuMovil   = document.querySelector('.toMenu');
const btn         = document.querySelector('#btn');
const menu        = document.querySelectorAll('.menu');

/*--------------EVENTOS--------------- */
const stickyNav = () => {
    window.addEventListener('scroll', () => {
        header.classList.toggle("sticky", window.scrollY > 0 );
    });
}

const botonMenu = () => {
    btn.addEventListener('click', () => {
        menuMovil.classList.toggle('active');
        console.log("hola mundo");
    });
}

const menuLinks = () => {
    menu.forEach((event) => {
        event.addEventListener('click', () => {
            menuMovil.classList.toggle('active');
        });
    })
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
    // ejecutarMenu();
}