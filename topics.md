---
title: Topics
permalink: /topics/
layout: default
---
<ul>
  {% for tag in site.tags %}
    <hr>
    <h4 id="{{tag[0]}}">{{tag[0] | upcase}}</h4>
    <br>
    {% for tagged_post in tag[1] %}
      <a href="{{site.baseurl}}{{tagged_post.url}}">{{tagged_post.title}}</a>
      <br>
    {% endfor %} 
  {% endfor %}
</ul>
