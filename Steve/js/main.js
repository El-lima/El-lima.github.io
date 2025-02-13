/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the function
    if(this.scrollY >= 50) header.classList.add('scroll-header');
}

window.addEventListener('scroll', scrollHeader)


/*=============== SWIPER LOCATION ===============*/
var swiperLocation = new Swiper(".location__container", {
    spaceBetween: 32,
    grabCursor: true,
    centerSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
              }else {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
              }
    })
}

window.addEventListener('scroll', scrollActive);


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const iconButton = document.getElementsByClassName('fa-sun');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//we obtain the current theme that the interface hasby validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'moon' : 'sun';


//We validate if the user previously chose a topic
if (selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know is we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    // Add or remove the dark / Icon theme
    document.body.classList.toggle(darkTheme);
    // themeButton.classList.toggle(iconTheme);
    // WE save the theme and current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

/*=============== SHOW SCROLLUP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
}

window.addEventListener('scroll', scrollUp);



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 100,
    reset: true
})

sr.reveal('.home__title, .popular__container, .location__container, .subscribe__container, .footer__container')
sr.reveal('.home__description, footer__info', {delay: 200})
sr.reveal('.home__search', {delay: 200})
sr.reveal('.home__value', {delay: 200})
sr.reveal('.home__images', {delay: 200, origin: 'bottom'})
sr.reveal('.logos__img', {interval: 100})
sr.reveal('.value__images, .contact__content', {origin: 'left'})
sr.reveal('.value__content, .contact__image', {origin: 'right'})

