---
layout: null
library: jquery-2.1.3.min.js
---
// Libraries
{% include_relative _lib/{{page.library}} %}
{% include_relative _lib/jquery.smoothState.js %}
{% include_relative _lib/list.js %}
{% include_relative _lib/lunr.min.js %}

// Initialization scripts
{% include_relative smoothstate_init.js %}
{% include_relative set_up_table.js %}


// $.getJSON( "{{site.baseurl}}/test.json", function( data ) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
//   console.log("JSON loaded");
 
  // $( "<ul/>", {
  //   "class": "my-new-list",
  //   html: items.join( "" )
  // }).appendTo( "search-results" );
// });

var req = $.getJSON("{{site.baseurl}}/test.json")
  .done(console.log("Finished"), 
  function() {
    window.json = req.responseJSON
  });

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