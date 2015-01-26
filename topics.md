---
title: Topics
permalink: /topics/
layout: default
---
<ul>
  {% assign sorted_tags = site.tags | sort %}
  {% for tag in sorted_tags %}
    <h4 id="{{tag[0]}}" class="meta">{{tag[0] | upcase}}</h4>
    <br>
    {% for tagged_post in tag[1] %}
      <a href="{{site.baseurl}}{{tagged_post.url}}">{{tagged_post.title}}</a>
      <br>
    {% endfor %}
    <hr>
  {% endfor %}
</ul>
