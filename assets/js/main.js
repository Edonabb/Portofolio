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
const contactForm = document.getElementById('contact-form'),
   contactName = document.getElementById('contact-name'),
   contactEmail = document.getElementById('contact-email'),
   contactPorject = document.getElementById('contact-project'),
   contactMessage = document.getElementById('contact-message')
   
const sendEmail = (e) =>{
   e.preventDefault()

            if( contactName.value ==='' || contactEmail.value === '' || contactPorject.value === ''){
                contactMessage.classList.remove('color-blue')
                contactMessage.classList.add('color-red')

        contactMessage.textContent = 'Write all the input fields'
   }else{
    emailjs.sendForm('sservice_ktumusa','template_z2ec326','contact-form','E4crpAYrNjxhoxsR-')
    .then(() => {
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message sent'
        
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)
    
    }
    )}  
  
}
contactForm.addEventListener('submit', sendEmail)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/