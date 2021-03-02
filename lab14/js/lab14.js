/**
 * Authors: Ethan Chen <ethchen@ucsc.edu> & Christian Oda <cwoda@ucsc.edu>
 * Created: 24 February 2021
 * License: Public Domain
 **/

//FizzBuzz function: Loops through numbers 1-200, prints Fizz, Buzz, or Boom
//based on multiples
function fizzBuzz() {
  //loop through numbers
  for (var num=1; num<=200; num++) {
    //create empty output string
    var outputStr = "";
    //if multiple of 3, add Fizz to outputStr
    if (num % 3 == 0) outputStr += "Fizz";
    //shrug
    //if multiple of 5, add Buzz to outputStr
    if (num % 5 == 0) outputStr += "Buzz";
    //if multiple of 7, add Boom to outputStr
    if (num % 7 == 0) outputStr += "Boom";
    //adds Steven to outputStr for every instance of 7 in num
    var numArray = num.toString().split('');
    for (var i=0; i<numArray.length; i++) {
      if (numArray[i] == "7") outputStr += "Steven";
    }
    //add extra elements to outputStr if not empty
    if (outputStr) outputStr = " - " + outputStr + "!";
    //append result to output div
    $("#output").append("<p>" + num + outputStr + "</p>");
  }
  debugger;
}
fizzBuzz();
