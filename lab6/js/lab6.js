/**
 * Authors: Ethan Chen <ethchen@ucsc.edu> & Christian Oda <cwoda@ucsc.edu>
 * Created: 1 February 2021
 * License: Public Domain
 **/

// Define array and object
var myTransport = ["Bus", "Car", "Feet"];
var myMainRide = {
  make: "Mitsubishi",
  model: "Lancer",
  color: "Black",
  year: 2017,
  ownIt: false,
  age: function() {
    return 2021 - year;
  }
};

//write to page
document.writeln("Transport methods: ", myTransport, "</br>");
document.writeln("The Ride of Main variety: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
