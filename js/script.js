const prev = document.querySelector('.carousel__prev'),
      next = document.querySelector('.carousel__next'),
      slide = document.querySelectorAll('.slide');

prev.addEventListener('click', () => {
    if (slide[0].classList.contains('slick-active')) {
        slide[0].classList.remove('slick-active');
        slide[2].classList.add('slick-active');
    } else if (slide[1].classList.contains('slick-active')) {
        slide[1].classList.remove('slick-active');
        slide[0].classList.add('slick-active');
    } else {
        slide[2].classList.remove('slick-active');
        slide[1].classList.add('slick-active');
    } 
});

next.addEventListener('click', () => {
    if (slide[0].classList.contains('slick-active')) {
        slide[0].classList.remove('slick-active');
        slide[1].classList.add('slick-active');
    } else if (slide[1].classList.contains('slick-active')) {
        slide[1].classList.remove('slick-active');
        slide[2].classList.add('slick-active');
    } else {
        slide[2].classList.remove('slick-active');
        slide[0].classList.add('slick-active');
    } 
});


const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      body = document.querySelector('body'),
      menuLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger__active');
    menu.classList.toggle('menu__active');
    if (hamburger.classList.contains('hamburger__active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'visible';
    }
});

function menuItem () {
        menu.classList.remove('menu__active');
        hamburger.classList.remove('hamburger__active');
        body.style.overflow = 'visible';
}

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', menuItem);
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});

    