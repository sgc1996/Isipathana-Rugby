/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  'use strict';

  // Sticky Menu
  $(window).scroll(function () {
    if ($('.navigation').offset().top > 100) {
      $('.navigation').addClass('nav-bg');
    } else {
      $('.navigation').removeClass('nav-bg');
    }
  });

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  // venobox popup 
  $('.venobox').venobox();

  // dropdown menu
  var mobileWidth = 992;
  var navcollapse = $('.navbar .dropdown');
  $(window).on('resize', function () {
    navcollapse.children('.dropdown-menu').hide();
  });
  navcollapse.hover(function () {
    if ($(window).innerWidth() >= mobileWidth) {
      $(this).children('.dropdown-menu').stop(true, false, true).slideToggle(250);
    }
  });

  // Progress Bar
  $(window).on('load', function () {
    $('.progress-bar').each(function () {
      var width = $(this).data('percent');
      $(this).css({
        'transition': 'width 3s'
      });
      $(this).appear(function () {
        $(this).css('width', width + '%');
        $(this).find('.count').countTo({
          from: 0,
          to: width,
          speed: 3000,
          refreshInterval: 50
        });
      });
    });
  });

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }

  // video iframe load
  $('.play-icon i').on('click', function () {
    var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
    $(this).replaceWith(video);
  });


  // Accordions
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
  });


  // clients logo slider
  $('.client-logo-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // testimonial slider
  var containerEl2 = document.querySelector('#slider');
  if (containerEl2) {
    window.slider = $('#slider').cardSlider({
      slideClass: 'slide',
      delay: 300,
      transition: 'ease'
    });
  }


})(jQuery);


 // JavaScript for the slider functionality
 const slider = document.querySelector('.imgslider-content');
 const slides = document.querySelectorAll('.imgslide');
 const slideWidth = slides[0].clientWidth;
 let counter = 0;

 function nextSlide() {
   counter++;
   if (counter >= slides.length - 3) { // -3 because we duplicated the first three slides
     counter = 0;
   }
   slider.style.transform = `translateX(${-slideWidth * counter}px)`;
 }

 setInterval(nextSlide, 3000); // Change slide every 3 seconds

   // JavaScript for counting years of career
   const careerCounter = document.getElementById('career-counter');
   let count = 0;
   const interval = setInterval(() => {
     count++;
     careerCounter.textContent = `${count}`;
     if (count >= 63) clearInterval(interval);
   }, 50); // Count every 100ms

   /* scrolling logo chnage */
   $(document).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 50) { /* Change 50 to the desired scroll amount when you want the effect to trigger */
        $('#logo').addClass('small');
      } else {
        $('#logo').removeClass('small');
      }
    });
  });