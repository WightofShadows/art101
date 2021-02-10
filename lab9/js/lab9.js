/**
 * Authors: Ethan Chen <ethchen@ucsc.edu> & Christian Oda <cwoda@ucsc.edu>
 * Created: 9 February 2021
 * License: Public Domain
 **/

//Find Output, Assign Variable
var outputEl = document.getElementById("output");

//Create new element
var new1El = document.createElement("p");

//Change new1El to something new
new1El.innerHTML = "Hi I am saying words";

//Create another element
var new2El = document.createElement("q");

//Change new2El to something new
new2El.innerHTML = "asghjk";

//Append elements
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//Change css attributes
outputEl.style.color = "orange";
outputEl.style.marginLeft = "40px";
document.body.style.backgroundColor = "lime";
