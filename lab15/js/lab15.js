/**
 * Authors: Ethan Chen <ethchen@ucsc.edu> & Christian Oda <cwoda@ucsc.edu>
 * Created: 3 March 2021
 * License: Public Domain
 **/

// link ajax
function ajaxButton() {
  $.ajax({
    url: "http://numbersapi.com/random/year?json",
    data: {
    },
    type: "GET",
    datatype: "json",
    success: missionSuccess,
    error: missionFailure,
    complete: function(xhr, status) {
      console.log("You have completed your extraordinary quest");
    }
  })
}

function missionSuccess(result) {
  console.log(result);
  $('#output').html(JSON.stringify(result));
}

function missionFailure(xhr, status, strErr) {
  console.log("Mission failed -", strErr);
}

// add click event
$('#activate').click(ajaxButton);
