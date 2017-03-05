"use strict";

$(document).ready(function() {

  $('#note-form').on('submit', function(e) {
    e.preventDefault();
    var noteBody = $(this).children('textarea').val();
    console.log(noteBody);
    $("#notes-container").prepend(getNote(noteBody));
  })

function getNote(body){
  var noteTemplate = '<article class="note shadow rounded" id="note-12"> \
      <div class="note-body">' + body + '</div> \
    </article>';
  return noteTemplate;
}

});
