/*
 Lab 15 - Ajax

   Author: Jianne Soto <jiasoto@ucsc.edu>
   Date: 31 May 2024
   License: Public Domain
  
   This script uses jQuery to make an AJAX call to the Chuck Norris API 
   and displays a random Chuck Norris joke in the output div when the 
   button is clicked.
*/

$(document).ready(function() {
   $("#activate").click(function() {
       $.ajax({
           // The URL for the request (from the api docs)
           url: "https://api.chucknorris.io/jokes/random",
           // The data to send (not required for this API)
           data: {},
           // Whether this is a POST or GET request
           type: "GET",
           // The type of data we expect back
           dataType: "json",
           // What do we do when the api call is successful
           // All the action goes in here
           success: function(data) {
               // Display the joke in the output div
               $("#output").text(data.value);
           },
           // What we do if the api call fails
           error: function(jqXHR, textStatus, errorThrown) {
               // Display an error message in the output div
               $("#output").text("An error occurred: " + textStatus);
               console.log("Error:", textStatus, errorThrown);
           }
       });
   });
});