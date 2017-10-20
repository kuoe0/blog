'use strict'

$(window).load(function(){
  function unveilImages() {
    $('.post-content img').each((i, img) => {
      $(img).unveil();
    });
  }
  unveilImages();
});

jQuery(document).ready(function($){

  function initLazyImagesLoading() {
    $('.post-content img').each((i, img) => {
      $(img).attr('data-src', $(img).attr('src'));
      $(img).attr('src', loadingAnimationURL);
    });
  }
  initLazyImagesLoading();

  function switchNavbarBackground() {
    // Remove bg-color of navbar when it is on the feature photo. Otherwise, add
    // bg-color to navbar.
    var scroll = $(window).scrollTop();
    var headerTop = $('.main-header')[0].offsetTop;
    var headerHeight = $('.main-header')[0].clientHeight;
    var navbar = $('nav')[0];
    if (scroll > headerTop + headerHeight) {
      $(navbar).addClass('dark');
    } else {
      $(navbar).removeClass('dark');
    }
  }

  function resetNavbar () {
    var dropdownNav = $('.dropdown')[0];
    $(dropdownNav).hide();
    switchNavbarBackground();
  }

  $(window).scroll(() => {
    // Close dropdown navigation bar when scrolling if it is opened.
    resetNavbar();
  });

  $(window).resize(resetNavbar);
  $('#nav-menu').click((evt) => {
    evt.preventDefault();
    var menu = $('.dropdown')[0];
    var isVisible = $(menu).is(':visible');
    var animateOption = { duration: 300 };
    if (isVisible) {
      animateOption.done = resetNavbar;
    } else {
      $('nav').each((i, nav) => { $(nav).addClass('dark'); });
    }
    $(menu).animate({ height: "toggle", }, animateOption);
  });

  function setFeaturePhoto() {
    if (typeof featurePhoto === 'undefined')
      return;
    console.log('Feature photo: ' + JSON.stringify(featurePhoto));
    $('#page-wrapper').css('background-image', 'url(' + featurePhoto.photoUrl + ')');
    $('header.main-header').css('background', 'rgba(0, 0, 0, 0.5)');
  }

  setFeaturePhoto();

});
