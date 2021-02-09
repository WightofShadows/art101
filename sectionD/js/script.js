var nameVar = "Me, the Namer";
var numVar = 427;
numVar = 247;

function notAtAllMyFirstFunction() {
  console.log("AAAAHHHHHHHHHHHH");
}

//compares two nums, outputs boolean if first is greater than second
function compareNums(numone, numtwo) {
  console.log("First num: ", numone, " Second num: ", numtwo);
  console.log("Is "+numone+" greater than "+numtwo+": ", numone > numtwo);
}

//Returns string with first and last name
function userInfo(firstName, lastName) {
  return "My first name is " + firstName + " and my last name is " + lastName;
}

//Prints to console + page
console.log(userInfo("Ethan", "Chen"));
document.writeln(userInfo("Ethan", "Chen"));
