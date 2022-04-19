
/* abrir e fechar o menu */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
        element.addEventListener('click', () => {
        nav.classList.toggle('show');
    })
}

/* esconder menu ao clicar nos links */

const links = document.querySelectorAll('nav ul li a');

for(const link of links){
    link.addEventListener('click', () => {
    nav.classList.remove('show');
    })
};


// mudar o header da pagina quando der scrool




const header = document.querySelector('#header');
const navHeight = header.offsetHeight;
function changeHeaderShadowOnScroll() {

    if (window.scrollY >= navHeight){
        // scroll e maior q a altura do header
        header.classList.add('scroll')
    } else {
        // scroll e menor q a altura do header
        header.classList.remove('scroll')

    }
}



const actualDate = document.querySelector('#date')

const data = new Date()
  year = data.getFullYear()

    actualDate.innerHTML = `2020 - ${year}`

// Scroll Reveal
ScrollReveal().reveal('#home .container h1, #services .container .content, #about .description, #about .cover, #results .container h3, #results .container .uk-slider-container-offset, #prevent .container, #client-results .container .header, #client-results.container .uk-position-relative, #banner-form .container form, #contact .container .footer-links, #contact .container .footer-footer' ,{ interval: 16, reset: true, origin: top});