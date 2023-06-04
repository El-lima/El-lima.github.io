// change nav styleon scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})


// CONTACT BUTTOND (circular text buttons)
const textButtons = document.querySelectorAll('.contact__btn');


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});

//====================== Responsive Navbar ======================//

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav);

closeNavBtn.addEventListener('click', closeNav);

if(document.body.clientWidth < 1024) {
  nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav);
  })
}


//====================== Like Buttons ======================//

const addInterationsToFeed = (feed) => {

  const likeBtn = feed.querySelector('.click');
  const likeIcon = feed.querySelector('.heart');
  const likeShow = feed.querySelector('.unclick');
  const photo = feed.querySelector('.photo');
  
  const showHeart = () => {
      likeIcon.classList.toggle('show');
      likeBtn.style.display = "none";
      likeShow.style.display = "inline-block";
      
  
      setTimeout( () => {
        likeIcon.classList.remove('show');
      }, 2000)
    }
  
    const removeColor = () => {
      likeBtn.style.display = "inline-block";
      likeShow.style.display = "none";
      likeIcon.classList.remove('show');
      
    }

    
    
  likeBtn.addEventListener('click', showHeart);
  photo.addEventListener('dblclick', showHeart);
  likeShow.addEventListener('click', removeColor);

 
}

const feeds = [...document.querySelectorAll('.feed')];
feeds.map(feed => addInterationsToFeed(feed));


  const exhibition = document.querySelector('.exhibition-reaction');
  const comment = document.querySelectorAll('.comment-pop');
    
  const closeComment = document.querySelector('.close');

  closeComment.addEventListener('click', () => {
    exhibition.style.display = "none";
  })
    
  


    comment.forEach(item => {
      item.addEventListener('click', () => {
        exhibition.style.display = "grid";
      })
  })




//====================== Gallery Js ======================//

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
