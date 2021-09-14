
const header = document.querySelector('header');


/*--------------EVENTOS--------------- */
const stickyNav = () => {
    const scrolling = window.addEventListener('scroll', (event) => {
        header.classList.toggle("sticky", window.scrollY > 0 );
    });
}

export {
    stickyNav
}

// export const init = () => {
//     stickyNav()l
// }