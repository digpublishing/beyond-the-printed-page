---
layout: null
library: jquery-2.1.3.min.js
---
// Libraries
{% include_relative _lib/{{page.library}} %}
{% include_relative _lib/jquery.smoothState.js %}
{% include_relative _lib/list.min.js %}

// Initialization scripts
{% include_relative smoothstate_init.js %}
{% include_relative setUpTable.js %}

// Application scripts
$(document).ready(function(){
  $('.js-menu-trigger').on('click touchstart', function(e){
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });

  $('.js-menu-screen').on('click touchstart', function(e){
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
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
