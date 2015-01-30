// Sortable tables
function setUpTable(){
  var options = {
    valueNames: [ 'title', 'institution', 'type', 'format', 'price' ]
  };
  var myTable = new List('pubs_survey', options);

  // commenting this out for now; line below needs to be call-able from DOM
  // to enable desired behavior
  // myTable.sort('type', { insensitive: true});
}
