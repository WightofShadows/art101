//var navBar = document.getElementById("nav");
//navBar.innerHTML = "This is navigation bar";
//navBar.style.color = "yellow";

function submitBio() {
  var nameVar = document.getElementById("name").value;
  console.log(nameVar);
  var emailVar = document.getElementById("email").value;
  console.log(emailVar);
  var messageVar = document.getElementById("message").value;
  console.log(messageVar);
  document.getElementById("social_1").innerHTML = nameVar + "<br>" + emailVar;
  document.getElementById("social_2").innerHTML = messageVar;
}

function changeColor() {
  document.getElementById("social_1").style.color = getRandomColor();
  document.getElementById("social_2").style.color = getRandomColor();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("button-cool").addEventListener('click', submitBio);
document.getElementById("color_button").addEventListener('click', changeColor);
