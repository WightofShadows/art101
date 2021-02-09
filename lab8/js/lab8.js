/**
 * Authors: Ethan Chen <ethchen@ucsc.edu> & Christian Oda <cwoda@ucsc.edu>
 * Created: 8 February 2021
 * License: Public Domain
 **/

// Functions

// firstThing
function firstThing(test) {
  console.log("First thing worst thing: " + test);
}

// secondThing
function secondThing(test) {
  console.log("second thing best thing: " + test);
}

// thirdThing
function thirdThing(test) {
  console.log("third thing shit thing: " + test);
}

// Test 1: Print in order
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

// Test 2: Print in order, but with anon functions and setTimeout()
setTimeout(function() {
  firstThing("TEST 2");
}, 0);
setTimeout(function() {
  secondThing("TEST 2");
}, 0);
setTimeout(function() {
  thirdThing("TEST 2");
}, 0);

// Test 3: Print in different order using setTimeout()
setTimeout(function() {
  firstThing("TEST 3");
}, 3000);
setTimeout(function() {
  secondThing("TEST 3");
}, 1000);
setTimeout(function() {
  thirdThing("TEST 3");
}, 2000);
