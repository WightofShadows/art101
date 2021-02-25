//creator: Ethan Chen
//date: 2/9/2021
//copyright: lolnon

/*
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
*/

// normal javascript version
/*
for (var index=0; index<10; index++) {
  var boxEl = document.createElement("div");
  boxEl.className = "box";
  boxEl.id = "box_id_" + (index+1);
  document.getElementById("container").appendChild(boxEl);
}*/

// jquery version
for (var index=0; index<100; index++) {
  //$("#container").append("<div class='box' id='box_id_" + (index+1) + "'>");
  if (index % 2 == 0)
    $("#container").append(`<div class='box_even' id='box_id_${index+1}'>`);
  else if (index % 3 == 0)
    $("#container").append(`<div class='box_third' id='box_id_${index+1}'>`);
  else
    $("#container").append(`<div class='box_odd' id='box_id_${index+1}'>`);
}
