/*
 * helper.js
 * Copyright (C) 2016 KuoE0 <kuoe0.tw@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

var Helper = {
  // aUrl is site.url
  // aBaseUrl is site.baseurl
  // aPath is feature.photo_url
  getFeaturePhotoUrl: function helper_getFeaturePhotoUrl(aUrl, aBaseUrl, aPhotoUrl) {
    // If got a relative path, convert it to absolute path.
    // This regexp is used to detect protocol.
    var protocolRegexp = /^\w+:\/\/.+/;
    if (!protocolRegexp.test(aPhotoUrl)) {
      return [aUrl].concat(aBaseUrl.split('/'))
                   .concat(aPhotoUrl.split('/'))
                   .filter(part => part) // remove empty strings
                   .join('/');
    }
    return aPhotoUrl;
  },
};

