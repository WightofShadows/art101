/**
 * Authors: Ethan Chen <ethchen@ucsc.edu> & Christian Oda <cwoda@ucsc.edu>
 * Created: 26 January 2021
 * License: Public Domain
 **/

// Define dem variables
var make = "Honda";
var model = "CR-V";
var color = "Glacier Blue Metallic";
var year = 2008;
var ownIt = false;

//calculate age
var age = 2021 - year;

//write to page
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Own it?: " + ownIt + "<br>");
document.writeln("Age: " + age + " years<br>");
