'use strict'

jQuery(document).ready(function($){

  $(window).scroll(() => {
    // Close dropdown navigation bar when scrolling.
    var dropdownNav = $('.dropdown')[0];
    $(dropdownNav).hide();

    var scroll = $(window).scrollTop();
    var headerTop = $('.main-header')[0].offsetTop;
    var headerHeight = $('.main-header')[0].clientHeight;
    var navbar = $('nav')[0];
    if (scroll > headerTop + headerHeight) {
      $(navbar).addClass('dark');
    } else {
      $(navbar).removeClass('dark');
    }
  });

  function resetNavbar () {
    var dropdownNav = $('.dropdown')[0];
    $(dropdownNav).hide();
    $('nav').each((i, nav) => { $(nav).removeClass('dark'); });
  }
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

  // Only used for homepage.
  function updateAllThumbPhoto() {
    $('.thumb-photo').each((idx, elem) => {
      let location = window.location;
      var oldUrl = $(elem).attr('src');
      var newUrl = Helper.getFeaturePhotoUrl(location.protocol + '//' + location.host,
                                             location.pathname,
                                             oldUrl);
      if (oldUrl != newUrl) {
        $(elem).attr('src', newUrl);
      }
    });
  }

  setFeaturePhoto();
  updateAllThumbPhoto();
});
