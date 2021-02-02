/**
 * Authors: Ethan Chen <ethchen@ucsc.edu> & Christian Oda <cwoda@ucsc.edu>
 * Created: 1 February 2021
 * License: Public Domain
 **/

// Functions
// sortDemLettas: Takes a user input and sorts the letters in ASCII order (I believe)
function sortDemLettas() {
  var userName = window.prompt("Sup bro, gives us ur ssn - I mean what's your name??");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//script output
document.writeln("This is a FAR better version of your name: ",
  sortDemLettas(), "</br>");
