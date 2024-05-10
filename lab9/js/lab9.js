/*
  lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
  Requirements: jQuery must be loaded for this script to work.
  
  Author: Jianne Soto <Jiasoto@ucsc.edu>
  Created: 13 May 2024
  License: Public Domain
*/

$(document).ready(function() {
    $(".special-sections").append("<button class='make-special'>Make Special</button>");
    $(".make-special").click(function() {
        $(this).parent().toggleClass("special").find("p").toggleClass("bold");
    });
    $("#results .make-special").click(function() {
        $("#results").toggleClass("special").find("img").toggle();
    });
});