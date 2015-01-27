---
title: Survey
layout: default
permalink: /survey/
---
<table class="survey" style="width:100%">
  <tr>
    <th class="row-title" colspan="3">Title</th>
    <th>Institution</th> 
    <th>Type</th>
    <th>Format</th>
    <th>Price</th>
  </tr>
  {% for item in site.data.survey %}
  <tr>
    <td class="row-title" colspan="3"><a href="{{item.purchase_url}}">{{item.title}}</a></td>
    <td><a href="{{item.publisher_url}}">{{item.institution}}</a></td> 
    <td>{{item.type}}</td>
    <td>{{item.format}}</td>
    <td>{{item.price}}</td>
  </tr>
  {% endfor %}
</table>