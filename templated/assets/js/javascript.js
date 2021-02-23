//var navBar = document.getElementById("nav");
//navBar.innerHTML = "This is navigation bar";
//navBar.style.color = "yellow";

//function submitBio() {
  //var nameVar = document.getElementById("name").value;
  //console.log(nameVar);
  //var emailVar = document.getElementById("email").value;
  //console.log(emailVar);
  //var messageVar = document.getElementById("message").value;
  //console.log(messageVar);
  //document.getElementById("social_1").innerHTML = nameVar + "<br>" + emailVar;
  //document.getElementById("social_2").innerHTML = messageVar;
//}

function submitBio() {
  var nameVar = $("#name").val();
  console.log(nameVar);
  var emailVar = $("#email").val();
  console.log(emailVar);
  var messageVar = $("#message").val();
  console.log(messageVar);
  $("#social_1").html(nameVar + "<br>" + emailVar);
  $("#social_2").html(messageVar);
}

//function changeColor() {
  //document.getElementById("social_1").className += " color_me";
  //document.getElementById("social_2").className += " color_me";
//}

function changeColor() {
  $("#social_1").toggleClass("color_me");
  $("#social_2").toggleClass("color_me");
}

//function getRandomColor() {
  //var letters = '0123456789ABCDEF';
  //var color = '#';
  //for (var i = 0; i < 6; i++) {
    //color += letters[Math.floor(Math.random() * 16)];
  //}
  //return color;
//}

$("#button-cool").click(submitBio);
$("#color_button").click(changeColor);

//document.getElementById("button-cool").addEventListener('click', submitBio);
//document.getElementById("color_button").addEventListener('click', changeColor);
