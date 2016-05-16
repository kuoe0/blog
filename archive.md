---
layout:    page
title:     "Blog Archive"
permalink: /archive/
image:     "https://raw.githubusercontent.com/KuoE0/blog-assets/master/feature-photos/archive.jpg"
image_info:
    creator:     "Quinn Dombrowski"
    url:         "https://www.flickr.com/photos/quinnanya/2493803790"
    license:     "CC 2.0"
    license_url: "https://creativecommons.org/licenses/by/2.0/"
---
<div class="page-content wc-container">
  {% for post in site.posts %}
  	{% capture currentyear %}{{post.date | date: "%Y"}}{% endcapture %}
  	{% if currentyear != year %}
    	{% unless forloop.first %}</ul>{% endunless %}
    		<h5>{{ currentyear }}</h5>
    		<ul class="posts">
    		{% capture year %}{{currentyear}}{% endcapture %} 
  		{% endif %}
    <li><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
{% endfor %}
</div>
