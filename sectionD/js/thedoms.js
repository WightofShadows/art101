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
/*
for (var index=0; index<100; index++) {
  //$("#container").append("<div class='box' id='box_id_" + (index+1) + "'>");
  if (index % 2 == 0)
    $("#container").append(`<div class='box_even' id='box_id_${index+1}'>`);
  else if (index % 3 == 0)
    $("#container").append(`<div class='box_third' id='box_id_${index+1}'>`);
  else
    $("#container").append(`<div class='box_odd' id='box_id_${index+1}'>`);
}
*/

//keypress
//substring
var fullText = $("#original_text").text();
$("#text_box").keyup(function() {
  var input = $("#text_box").val();
  var subStr = fullText.substring(0, input.length);
  if (input.length > fullText.length) {
    $("#text_box").css('border-color', 'grey');
    $("#original_text").append("<p>OY! GET BACK 'ERE MAYTE!</p>");
  }
  else if (input == fullText) {
    $("#text_box").css('border-color', 'green');
  }
  else if (input == subStr) {
    $("#text_box").css('border-color', 'blue');
  }
  else {
    $("#text_box").css('border-color', 'red');
  }
})

/*
// Using the core $.ajax() method
$.ajax({
    // The URL for the request
    url: "post.php",
    // The data to send (will be converted to a query string)
    data: { id: 123},
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
})

$.ajax() {
. . .
}
// If the request succeeds
.done(function( json ) {
    alert("Success!");
})
// If the request fails
.fail(function( xhr, status, errorThrown ) {
    console.log(errorThrown + " Status:" + status );
});
*/
