'use strict'

jQuery(document).ready(function($){
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
