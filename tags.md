---
title: Tags
permalink: /tags/
layout: default
---
<ul>
  {% for item in site.tags %}
    <hr>
    <h4>{{item[0]}}</h4>
    <br>
    {% for content in item[1] %}
      <a href="{{site.baseurl}}{{content.url}}">{{content.title}}</a>
      <br>
    {% endfor %} 
  {% endfor %}
</ul>
