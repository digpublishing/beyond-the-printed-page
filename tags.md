---
Title: Tags
permalink: /tags/
layout: home
---
<h2>Tags</h2>
<ul>
  {% for item in site.tags %}
    <hr>
    <h4>{{item[0]}}</h4>
    <br>
    {% for content in item[1] %}
      {{content.title}}
      <br>
    {% endfor %} 
  {% endfor %}
</ul>
