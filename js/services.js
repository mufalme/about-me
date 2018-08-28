/*

My Custom JS
============

*/
$(document).ready(function() {
  $("#glass-btn").click(function() {
    $("#glass").addClass("animated fadeInRight").show();
    $("#stands").addClass("animated fadeInRight").hide();
    $("#wooden").addClass("animated fadeInRight").hide();

  });


  $("#wood-btn").click(function() {
    $("#wooden").addClass("animated fadeInRight").show();
    $("#glass").addClass("animated fadeInRight").hide();
    $("#stands").addClass("animated fadeInRight").hide();


  });


  $("#stands-btn").click(function() {
    $("#stands").addClass("animated fadeInRight").show();
    $("#glass").addClass("animated fadeInRight").hide();
    $("#wooden").addClass("animated fadeInRight").hide();

  });




});
