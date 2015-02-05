---
layout: null
library: jquery-2.1.3.min.js
---
// Libraries
{% include_relative _lib/{{page.library}} %}
{% include_relative _lib/jquery.smoothState.js %}
{% include_relative _lib/list.js %}
{% include_relative _lib/lunr.min.js %}
{% include_relative _lib/jquery.stickytableheaders.min.js %}

// Initialization scripts
{% include_relative smoothstate_init.js %}
{% include_relative set_up_table.js %}

// Application scripts
$(document).ready(function(){

  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });

  setUpTable();
});