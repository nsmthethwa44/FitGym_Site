// specials swiper slides
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
  },
  breakpoints: {
   
    200: {
      slidesPerView: 1,
    },
    
    567: {
      slidesPerView: 2,
    },
     992: {
      slidesPerView: 3,
    },
    //  1000: {
    //   slidesPerView: 3,
    // },
  },
      });


// rellax js
// var rellax = new Rellax('.rellax', {
//   center: true
// });

AOS.init({
  duration: '800',
  anchorPlacement: 'center-bottom'
});

// when menuImg onclick show small device menu
// when closeImg onclick hide navbar
// when window onscroll remove navbar
// if scroll top is > 150 show a scrollTop button
let menuImg = document.querySelector(".menuImg");
let closeImg = document.querySelector(".closeImg");
let navbar = document.querySelector(".navbar");
let goTop = document.querySelector(".goTop");
menuImg.onclick = () => { 
  navbar.classList.add("active");
}
closeImg.onclick = () => { 
  navbar.classList.remove("active");
}
window.onscroll = () => { 
  navbar.classList.remove("active");

  if (window.scrollY > 150) {
    goTop.classList.add("active");
  } else {
    goTop.classList.remove("active");
  }
}

// when nav onclick view respective section and
// close navbar and add active class 
let navLink = document.querySelectorAll(".navbar .nav li a");
Array.from(navLink).forEach((item, index) => { 
  item.onclick = (e) => { 
let activeNavLink = document.querySelector(".navbar .nav li a.active");
    activeNavLink.classList.remove("active");
    e.target.classList.add("active");
  navbar.classList.remove("active");
  }
})