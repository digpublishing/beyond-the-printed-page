---
title: Issues
permalink: /issues/
---
<ul>
  {% for issue in site.issues %}
  <li>
    <h6>Issue {{issue.number}}</h6>
    <a href="{{site.baseurl}}{{issue.url}}"><h3>{{issue.title}}</h3></a>
  </li>
  <br />
  {% endfor %}
</ul>