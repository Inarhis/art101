/*
 Lab 15 - Ajax

   Author: Jianne Soto <jiasoto@ucsc.edu>
   Date: 31 May 2024
   License: Public Domain
   
   This script uses jQuery to make an AJAX call to the NASA Picture of the Day API 
   and displays the picture, title, and description in the output div when the 
   button is clicked.
 */

$(document).ready(function() {
  $("#activate").click(function() {
      $.ajax({
          // The URL for the request (from the api docs)
          url: "https://api.nasa.gov/planetary/apod",
          // The data to send (will be converted to a query string)
          data: { 
              api_key: "07hpSQv63xeRJHEIQxjxFpcVX76TAUy1Ssdk3Dc7"
          },
          // Whether this is a POST or GET request
          type: "GET",
          // The type of data we expect back
          dataType: "json",
          // What do we do when the API call is successful
          success: function(data) {
              // Determine if the media type is an image or video
              let mediaElement;
              if (data.media_type === "image") {
                  mediaElement = `<img src="${data.url}" alt="NASA Picture of the Day" style="max-width: 100%;">`;
              } else if (data.media_type === "video") {
                  mediaElement = `<iframe src="${data.url}" frameborder="0" allowfullscreen style="width: 100%; height: 500px;"></iframe>`;
              } else {
                  mediaElement = `<p>Unsupported media type: ${data.media_type}</p>`;
              }

              // Display the media, title, and description in the output div
              $("#output").html(
                  `<h3>${data.title}</h3>
                  ${mediaElement}
                  <p>${data.explanation}</p>`
              );
          },
          // What we do if the API call fails
          error: function(jqXHR, textStatus, errorThrown) {
              // Display an error message in the output div
              $("#output").text("An error occurred: " + textStatus);
              console.log("Error:", textStatus, errorThrown);
          }
      });
  });
});