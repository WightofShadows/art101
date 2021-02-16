/**
 * Authors: Ethan Chen <ethchen@ucsc.edu> & Christian Oda <cwoda@ucsc.edu>
 * Created: 15 February 2021
 * License: Public Domain
 **/

 // Functions
 // sortDemLettas: Takes a user input and sorts the letters
 function sortDemLettas() {
   // get value in input box
   var inputValue = document.getElementById('user-name').value;
   // split the array
   var nameArray = inputValue.split('');
   // sort the array
   var nameArraySort = nameArray.sort();
   // join array back to a string
   var nameSorted = nameArraySort.join('');
   // get output and replace with sorted name
   var outputLine = document.getElementById("output");
   outputLine.innerHTML = nameSorted;
 }

// get button
var theGreatButton = document.getElementById("my-button")
// add event listener
theGreatButton.addEventListener('click', sortDemLettas);
