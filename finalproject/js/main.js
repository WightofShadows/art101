/**
 * Authors: Group 2 -
 * Ethan Chen <ethchen@ucsc.edu>
 * Created: 27 February 2021
 * License: Public Domain
 **/

 //snack balance
 var bal = 20;
 //adjustable snack costs
 var pcost = 5;
 var scost = 2;
 //number of purchases for each snack
 var ppurchases = 0;
 var spurchases = 0;

//function for genres button
$("#genres").click(function() {
  $("#sub_content").html("");
  $("#sub_content_2").html("");
  $("#content").html("<p>Choose from these genres:</p>");

  //Action adventure
  $("#content").append("<button id='aa'>Action/Adventure</button>");
  $("#aa").click(function() {
    $("#sub_content").html("<p>This is action adventure</p>");
  })

  //Drama
  $("#content").append("<button id='dr'>Drama</button>");
  $("#dr").click(function() {
    $("#sub_content").html("<p>This is drama</p>");
  })

  //Comedy
  $("#content").append("<button id='cm'>Comedy</button>");
  $("#cm").click(function() {
    $("#sub_content").html("<p>This is comedy</p>");
  })

  //Horror
  $("#content").append("<button id='hr'>Horror</button>");
  $("#hr").click(function() {
    $("#sub_content").html("<p>This is horror</p>");
  })

  //Documentary
  $("#content").append("<button id='dc'>Documentary</button>");
  $("#dc").click(function() {
    $("#sub_content").html("<p>This is documentary</p>");
  })
})

//function for snacks button
$("#snacks").click(function() {
  $("#sub_content").html("");
  $("#sub_content_2").html("");
  $("#content").html("<p>What snacks would you like to purchase?</p>");
  $("#content").append("<p id='balance'>Your balance: $" + bal + "</p>");

  //Purchase list
  $("#sub_content").html("<p>Your purchases:</p>");
  $("#sub_content").append("<ul id='purchase_list'></ul>");
  $("#purchase_list").append("<li id='pop_list'>Popcorn (" + ppurchases + ")</li>");
  $("#purchase_list").append("<li id='soda_list'>Soda (" + spurchases + ")</li>");

  //Popcorn
  $("#content").append("<button id='pop'>Popcorn ($" + pcost + ")</button>");
  $("#pop").click(function() {
    if (bal < pcost) {
      $("#sub_content_2").html("<p>NOT ENOUGH CASH</p>");
      $("#sub_content_2").css("color", "red");
    }
    else {
      ppurchases++;
      $("#pop_list").html("Popcorn (" + ppurchases + ")");
      $("#sub_content_2").html("");
      bal -= pcost;
    }
    $("#balance").html("Your balance: $" + bal);
  })

  //Soda
  $("#content").append("<button id='soda'>Soda ($" + scost + ")</button>");
  $("#soda").click(function() {
    if (bal < scost) {
      $("#sub_content_2").html("<p>NOT ENOUGH CASH</p>");
      $("#sub_content_2").css("color", "red");
    }
    else {
      spurchases++;
      $("#soda_list").html("Soda (" + spurchases + ")");
      $("#sub_content_2").html("");
      bal -= scost;
    }
    $("#balance").html("Your balance: $" + bal);
  })
})

//function for search button
$("#search").click(function() {

})
