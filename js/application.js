"use strict";

$(document).ready(function() {

  $('#note-form').on('submit', function(e) {
    e.preventDefault();
    var noteBody = $(this).children('textarea').val();
    console.log(noteBody);
    $("#notes-container").prepend(getNote(noteBody));
  })

  $('#notes-container').on('click', '#color-buttons button', function() {
    console.log($(this));
    var $note = $(this).closest('.note');
    var color = $(this).data('color');
    $note.css("background-color", color);
  })

  function getNote(body){
    var noteTemplate = '<article class="note shadow rounded" id="note-12"> \
        <div class="note-body">' + body + '</div> \
      </article>';
    return noteTemplate;
  }

});
