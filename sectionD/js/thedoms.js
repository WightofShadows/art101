//creator: Ethan Chen
//date: 2/9/2021
//copyright: lolnon

var divEl = document.getElementById("div_1");
divEl.innerHTML = "This is annoying ";
console.log(divEl.innerHTML);
var divButton = document.createElement("button");
divButton.innerHTML = "Cool button";
divButton.onclick = function() {
  divEl.innerHTML = "This is more annoying than I thought! ";
}
document.body.appendChild(divButton);
divButton.style.backgroundColor = "turquoise";
divButton.className = "crunkards";
