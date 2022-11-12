/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
    //   MENU SHOW
    // Validate if constant exists
    if(navToggle){
        navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        })
   }
//  MENU HIDDEN
//  Validate if constant exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
         const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
    } 
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".container ", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination:{
    el: ".swiper-pagination",
    clickable:true,
  },

  breakpoints:{
    576: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 48,
    }

}
  
  });

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/