---
title: home
layout: home
---
<div class="current-issue">
<h3 class="current meta">Current Issue</h3>
{% for issue in site.issues | limit: 1 %}
  <a href="{{site.baseurl}}{{issue.url}}">
    <h3 class="current-issue-title">{{issue.title}}</h3>
  </a>
  <h6 class="meta current-issue-date">{{issue.date | date: "%-d %B %Y"}}</h6>
{% endfor %}
<br>
<p class="meta"><a href="{{site.baseurl}}/issues">View All Issues &raquo;</a></p>
</div>