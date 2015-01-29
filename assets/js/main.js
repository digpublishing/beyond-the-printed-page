---
layout: null
library: jquery-2.1.3.min.js
---
// Libraries
{% include_relative _lib/{{page.library}} %}
{% include_relative _lib/jquery.smoothState.js %}
{% include_relative _lib/list.js %}

// Initialization scripts
{% include_relative smoothstate_init.js %}
{% include_relative setUpTable.js %}

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

  // test code: needs to go inside document.ready
  // $('.table-controls a').on('click touchstart', function(e){
  //   target = $(this).data('sort');
  //   e.preventDefault;
  //   flag = true;
  //   window.pubsSurvey.sort(target, {insensitive: true, desc: flag});
  // });
