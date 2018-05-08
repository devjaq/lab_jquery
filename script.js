"use strict";
$(document).ready(() => {


  $(document).click((e) => {

    if ($(e.target).hasClass("available")) {
      console.log("It works!");

      $("form").show();
      let num = $(e.target)[0].innerText;
      $(e.target).toggleClass( "clicked");
      $(e.target).attr("id", num);
    }
    // console.log(num);
    // If the element we are clicking on has a class of close-button...
    if ($(e.target).hasClass("close-button")) {
      $(e.target).parent().hide();
      $(".clicked").toggleClass( "clicked");
    }

    // if ($(e.target) != $("form") && $("form").css(display, show)) {
    //   $("form").hide();
    //   $(".clicked").toggleClass( "clicked");
    // }

    if ($(e.target).hasClass("save-button")) {
      $(".clicked").toggleClass( "available reserved clicked");
      $("form").hide();

    }


  });


}); /////////////////THE END