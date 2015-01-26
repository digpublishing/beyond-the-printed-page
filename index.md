---
title: home
layout: home
---
<div class="current-issue">
{% for issue in site.issues | limit: 1 %}
<h4 class="meta">Current Issue | {{issue.date}}</h4>
  <a href="{{site.baseurl}}{{issue.url}}">
    <h3 class="current-issue-title">{{issue.title}}</h3>
  </a>
{% endfor %}
<br>
<p class="meta issue-link"><a href="{{site.baseurl}}/issues">View All Issues &raquo;</a></p>
</div>