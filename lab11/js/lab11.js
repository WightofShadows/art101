/**
 * Authors: Ethan Chen <ethchen@ucsc.edu> & Christian Oda <cwoda@ucsc.edu>
 * Created: 17 February 2021
 * License: Public Domain
 **/

// add buttons to the divs
$("#challenges").append("<button id=c_button>Challenge Button</button>");
$("#problems").append("<button id=p_button>Problem Button</button>");
$("#results").append("<button id=r_button>Result Button</button>");

// add click events to buttons
$("#c_button").click(challengeButton);
$("#p_button").click(problemButton);
$("#r_button").click(resultsButton);

// toggle class special
//function for button 1
function challengeButton() {
  $("#challenges").toggleClass("special");
}

//function for button 2
function problemButton() {
  $("#problems").toggleClass("special");
}

//function for button 3
function resultsButton() {
  $("#results").toggleClass("special");
}
