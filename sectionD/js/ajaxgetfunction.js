function getajaxdata() {
$.ajax({
  url: "data/dataxml.xml",
  type: "GET",
  datatype: "xml",
  success: successFun,
  error: errorFun,
  complete: function(xhr, status) {
    console.log("You have completed your extraordinary quest");
  }
})
}

function successFun(result) {
  console.log(result);
  $('#ajax_text').html(result.getElementsByTagName("note"));
}

function errorFun(xhr, status, strErr) {
  console.log("No no, you got it all wrong! " + strErr);
}
$('#ajax_get').click(getajaxdata);
