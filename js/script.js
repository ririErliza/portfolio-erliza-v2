let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');

}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

var swiper = new Swiper(".image-slider", {
    loop:true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
        
      },
    },
  });

  //to top button
  mybutton = document.getElementById("myBtn");
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
  } else {
  mybutton.style.display = "none";
  }
  }

  function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
  }



