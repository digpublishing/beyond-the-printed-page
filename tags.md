---
title: Tags
permalink: /tags/
layout: default
---
<ul>
  {% for tag in site.tags %}
    <hr>
    <h4>{{tag[0]}}</h4>
    <br>
    {% for tagged_post in tag[1] %}
      <a href="{{site.baseurl}}{{tagged_post.url}}">{{tagged_post.title}}</a>
      <br>
    {% endfor %} 
  {% endfor %}
</ul>
