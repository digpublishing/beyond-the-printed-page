---
title: Issues
Permalink: /issues/
---
Projects index goes here.

{% for issue in site.issues %}
  <ul>
  	<li>
  		<a href="{{site.baseurl}}{{issue.url}}">{{issue.title}}</a>
  	</li>
  </ul>
{% endfor %}