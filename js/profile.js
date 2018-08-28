/*

My Custom JS
============

*/
$(document).ready(function() {
  $("form#userform").submit(function(e) {
    e.preventDefault();
    var username = $("#username").val();
    var usermsg = $("#usermessage").val();

    $("ul#reviewz").append('<li>' +
      '<div>' +
      '<a href=""><img src="images/def.jpg" width="55" height="55" alt="pikabob photo avatar"></a>' +
      '</div>' +
      '<div>' +
      '<header><a href="">' + username + '</a> - <span>1 sec ago</span></header>' +
      '<p>' + usermsg + '<p>' +
      '</div>' +
      '</li>');

    $("#username").val("");
    $("#usermessage").val("");
  });
});
