jQuery(document).ready(function($){
  function setFeaturePhoto() {
    if (typeof featurePhoto === 'undefined')
      return;
    console.log('Feature photo: ' + JSON.stringify(featurePhoto));
    $('#page-wrapper').css('background-image', 'url(' + featurePhoto.photo_url + ')');
    $('header.main-header').css('background', 'rgba(0, 0, 0, 0.5)');
  }

  setFeaturePhoto();
});
