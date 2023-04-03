"use strict";
let mobBtn = document.querySelector('.mob-btn')
let menu = document.querySelector('.menu-wrapper')
  mobBtn.addEventListener('click', function(){
    menu.classList.toggle('show-menu');
  })




  

  //Testimonial Slider
  $('.testimonialSlider').slick({
    slidesToShow:1,
    slideToScroll: 1,
    autoplay:true,
    dots: false,
    arrows: false,
    responsive: [
     {
       breakpoint: 1200,
       settings: {
         slidesToShow:1,
         slidesToScroll: 1,
         
       }
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       }
     },
     {
       breakpoint: 767,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       }
     }
     ],


  });



  $(window).scroll(function(){
    if ($(this).scrollTop() > 80) {
       $('header').addClass('fixedHead');
    } else {
       $('header').removeClass('fixedHead');
    }
});