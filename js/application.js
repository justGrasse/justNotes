"use strict";

$(document).ready(function() {

  $('#note-form').on('submit', function(e) {
    e.preventDefault();
    var $noteTextarea = $(this).children('textarea');
    var noteBody = $noteTextarea.val();
    $noteTextarea.val('');
    $noteTextarea.focus();
    $("#notes-container").prepend(getNote(noteBody));
  })

  $('#notes-container').on('click', '.color-buttons button', function() {
    var $note = $(this).closest('.note');
    var color = $(this).data('color');
    $note.css("background-color", color);
  })

  $('#notes-container').on('click', '#delete-button', function() {
    var $note = $(this).closest('.note');
    $note.remove();
  })

  function getNote(body){
    var noteTemplate = '<article class="note shadow rounded" id="note-12"> \
        <div class="note-body" onClick="this.contentEditable=true;">'
        + body + '</div>' + noteButtons() + '</article>';
    return noteTemplate;
  }

  function noteButtons(){
    var noteTemplate = '<div class="note-buttons">  \
            <div class="color-buttons"> \
              <button type="button" id="yellow" data-color="gold"></button> \
              <button type="button" id="orange" data-color="orange"></button> \
              <button type="button" id="green" data-color="palegreen"></button> \
              <button type="button" id="blue" data-color="powderblue"></button> \
            </div>  \
            <div id="delete-container"> \
              <button type="button" id="delete-button">DELETE</button>  \
            </div>  \
          </div>';
    return noteTemplate;
  }

});
