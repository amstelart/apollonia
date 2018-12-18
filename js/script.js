// (function(){
// код
// }());

svg4everybody();

$( document ).ready(function() {

  var t0;

  $('#toTop').hide().on('click', function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, 300);
  });

  $(window).on('scroll', function(){
    clearTimeout(t0);
    t0 = setTimeout(function () {
        showScrollTopButton();
      }, 100);
  });

  showScrollTopButton();

  function showScrollTopButton(){
    if ( $(document).scrollTop() >= 900 ) {
      $('#toTop').fadeIn();
    }
    else {
      $('#toTop').fadeOut();
    }
  }

});

// $(document).ready(function(){

//   $("#owl-carousel-demo").owlCarousel({
//     items: 3,
//     nav: true,
//     loop: true,
//     center: true,
//     responsive : {
//       0 : {
//         items: 1,
//         nav: true,
//         loop: true,
//         center: true,
//       },
//       480 : {
//         items: 3,
//       },
//       768 : {
//         items: 3,
//       },
//       992 : {
//         items: 3,
//       },
//       1200 : {
//         items: 3,
//       },
//       1800 : {
//         items: 3,
//       }
//     }
//   });

// });

document.addEventListener('DOMContentLoaded', function(){
  objectFitImages();
});

// Если на проекте jQuery
$( document ).ready(function() {

  if(window.matchMedia('(min-width: 992px)').matches)
  {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 200) {
        $('.header-nav').addClass('header-nav--sticky');
      } else {
        $('.header-nav').removeClass('header-nav--sticky');
      }
    });
  };

  $("#main-carousel").owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    autoplay: true,
    margin: 30,
    dots: true,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    center: false,
    responsive : {
      0 : {
        items: 1,
        nav: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 2,
      },
      768 : {
        items: 2,
      },
      992 : {
        items: 2,
      },
      1200 : {
        items: 3,
        center: true
      },
      1800 : {
        items: 3,
        center: true
      }
    }
  });

});



// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
