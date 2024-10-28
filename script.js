document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    // Check if the link is an internal link (starting with '#')
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function () {
  const banner = document.querySelector('.banner');
  const nav = document.getElementById('header');
  const bannerHeight = banner.clientHeight;

  const currentScrollPos = window.scrollY;
  if (currentScrollPos > bannerHeight) {
    banner.classList.add('sticky');
    nav.style.top = '120px';
  } else {
    banner.classList.remove('sticky');
    nav.style.top = '0';
  }
  prevScrollPos = currentScrollPos;
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
