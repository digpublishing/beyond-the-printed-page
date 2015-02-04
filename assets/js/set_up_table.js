// Sortable tables
function setUpTable(){
  var options = {
    valueNames: [ 'title', 'institution', 'type', 'format', 'price' ]
  };
  var surveyTable = new List('pubs_survey', options);

  $("#pubs_survey").on("keyup", "input", function () {
    var numResults = $("#pubs_survey tbody tr").length;
    $(".results").text(numResults);
  });
}

