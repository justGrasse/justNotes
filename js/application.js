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
        <div id="color-buttons"> \
          <button type="button" id="yellow" data-color="gold"></button> \
          <button type="button" id="orange" data-color="orange"></button> \
          <button type="button" id="green" data-color="palegreen"></button> \
          <button type="button" id="blue" data-color="powderblue"></button> \
        </div> \
        <div id="delete-container"> \
          <button type="button" id="delete-button">DELETE</button> \
        </div> \
      </article>';
    return noteTemplate;
  }

});
