---
layout:  post
title:   "Post with Feature Photo"
date:    2016-03-26
tags:    ["feature photo"]
feature:
    photo:       true
    photo_url:   "assets/images/2016-03-26-post-with-feature-photo.jpg"
    creator:     "Anthony DELANOIX"
    creator_url: "https://unsplash.com/photos/b5POxb2aL9o"
    license:     "CC0"
    license_url: "http://creativecommons.org/publicdomain/zero/1.0/"
---

If you want to specify a photo as the feature photo for a post. Just put the following information in Front Matter.

```
feature:
    photo:       true
    photo_url:   "assets/images/2016-03-26-post-with-feature-photo.jpg"
    creator:     "Anthony DELANOIX"
    creator_url: "https://unsplash.com/photos/b5POxb2aL9o"
    license:     "CC0"
    license_url: "http://creativecommons.org/publicdomain/zero/1.0/"
```

## About `photo_url`

There are two types of URL Harmono supported.

### Absolute URL on Internet

The photo URL will be the value you set on Front Matter.

**Example**

```
photo_url:   "http://kuoe0.github.io/harmono/assets/images/2016-03-26-post-with-feature-photo.jpg"
```

The actual URL of the photo will be [http://kuoe0.github.io/harmono/assets/images/2016-03-26-post-with-feature-photo.jpg](http://kuoe0.github.io/harmono/assets/images/2016-03-26-post-with-feature-photo.jpg).

### Relative URL based on the URL setting in `_config.yml`

The URL will be `{{ site.url }}{{ site.base_url }}/{{ photo_url }}`.

```
photo_url:   "assets/images/2016-03-26-post-with-feature-photo.jpg"
```

The actual URL of the photo will also be [http://kuoe0.github.io/harmono/assets/images/2016-03-26-post-with-feature-photo.jpg](http://kuoe0.github.io/harmono/assets/images/2016-03-26-post-with-feature-photo.jpg). Depend on the `url` and `base_url` varialble you set in `_config.yml`.
