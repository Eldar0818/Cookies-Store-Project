// nav links in smaller screen...
const menuBar = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});

// in smaller screen scroll widow nav links go...


window.addEventListener('scroll', () => {
    menuBar.classList.remove("fa-times");
    navbar.classList.remove("active");

});

// functionality for search icon...
const searchIcon = document.querySelector('#search-icon');
const searchForm = document.querySelector('#search-form');
const closeBtn = document.querySelector('#close');

searchIcon.addEventListener('click', () => {
    searchForm.classList.toggle("active");
})

closeBtn.addEventListener('click', () => {
    searchForm.classList.remove("active");
})


// slide bar effect from swiper...
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });