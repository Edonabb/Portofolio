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
    
    },(error) =>{
        alert('OOPS! SOMETHING HAS FAILED...', error)
    }
    )}  
  
}
contactForm.addEventListener('submit', sendEmail)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
   const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
   }
   window.addEventListener('scroll',scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)

}

themeButton.addEventListener('click', () =>{
document.body.classList.toggle(darkTheme)
themeButton.classList.toogle(iconTheme)

localStorage.setItem('selected-theme', getCurrentTheme())
localStorage.setItem('selected-icon', getCurrentIcon())

})


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/