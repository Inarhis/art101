/*
  lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
  Requirements: jQuery must be loaded for this script to work.
  
  Author: Jianne Soto <Jiasoto@ucsc.edu>
  Created: 13 May 2024
  License: Public Domain
*/

$(document).ready(function() {
    // Add buttons to challenge, problems, reflection, and results sections
    $("#challenge").append("<button id='button-challenge'>Make Special</button>");
    $("#problems").append("<button id='button-problems'>Make Special</button>");
    $("#reflection").append("<button id='button-reflection'>Make Special</button>");
    $("#results").append("<button id='button-results'>Make Special</button>");

    // Add click listeners to the buttons
    $("#button-challenge").click(function() {
        $("#challenge").toggleClass("special");
    });

    $("#button-problems").click(function() {
        $("#problems").toggleClass("special");
    });

    $("#button-reflection").click(function() {
        $("#reflection").toggleClass("special");
    });

    $("#button-results").click(function() {
        // Toggle the "special" class on the results section
        $("#results").toggleClass("special");

        // Check if the "special" class is added to the results section
        if ($("#results").hasClass("special")) {
            // If it is, append an image to the results section
            $("#results").append("<img src='img/frog.png' alt='Frog'>");
        } else {
            // If not, remove the image from the results section
            $("#results img").remove();
        }
    });

    // Toggle the "special" class on all sections when the document is ready
    $("section").each(function() {
        $(this).toggleClass("special");
    });
});