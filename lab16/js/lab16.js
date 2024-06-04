/*
 Lab 16 - JSON and APIs

   Author: Jianne Soto <jiasoto@ucsc.edu>
   Date: 31 May 2024
   License: Public Domain
   
   This script fetches comic data from an API using jQuery's $.ajax() method.
   It processes the received data and updates the webpage with the comic's title,
   image, and alternative text.

 */

// Initialize comic number
var comicNum = 1;

// Function to get and display comic data
function getAndPutData(comicNum) {
    $.ajax({
        url: `https://xkcd.com/${comicNum}/info.0.json`,
        dataType: "json",
        success: function(data) {
            // Update webpage with comic image and title
            $('#comic-title').text(data.title);
            $('#comic-image').attr('src', data.img);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
}

// Initial call to display the first comic
getAndPutData(comicNum);

// Event listener for next button
$('#next-button').click(function() {
    comicNum++;
    getAndPutData(comicNum);
});

// Event listener for previous button
$('#prev-button').click(function() {
    comicNum--;
    if (comicNum < 1) {
        comicNum = 1; // Ensure comic number doesn't go below 1
    }
    getAndPutData(comicNum);
});