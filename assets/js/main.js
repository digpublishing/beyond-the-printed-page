---
layout: null
library: jquery-2.1.3.min.js
---
// If using a JS framework, include it here
{% include_relative _lib/{{page.library}} %}
{% include_relative _lib/jquery.smoothState.js %}
{% include_relative _lib/viewport-units-buggyfil.js %}

// Application code goes here
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
});

// smoothstate JS
;(function($) {
  'use strict';
  var $body = $('html, body'),
      content = $('#main').smoothState({
        // Runs when a link has been activated
        onStart: {
          duration: 250, // Duration of our animation
          render: function (url, $container) {
            // toggleAnimationClass() is a public method
            // for restarting css animations with a class
            content.toggleAnimationClass('is-exiting');
            // Scroll user to the top
            $body.animate({
              scrollTop: 0
            });
          }
        }
      }).data('smoothState');
      //.data('smoothState') makes public methods available
})(jQuery);

// Viewport Units Buggyfill
window.viewportUnitsBuggyfill.init();

// Vanilla JS equivalent of $(document).ready
//document.addEventListener('DOMContentLoaded', function(){
//
//});