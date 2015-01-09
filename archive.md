---
title: Archive
permalink: /archive/
---

<ul class="articles">
{% for post in site.posts %}
  <li>
    <a href="{{site.baseurl}}{{post.url}}"><h5>{{post.title}}</h5></a>
    <h6 class="meta">{{post.date | date: "%-d %B %Y"}} | {{post.author.display_name}}</h6>
  </li>
{% endfor %}
</ul>
