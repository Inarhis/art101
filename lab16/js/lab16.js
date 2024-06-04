/*
 Lab 16 - JSON and APIs

   Author: Jianne Soto <jiasoto@ucsc.edu>
   Date: 31 May 2024
   License: Public Domain
   
   This script fetches comic data from an API using jQuery's $.ajax() method.
   It processes the received data and updates the webpage with the comic's title,
   image, and alternative text.

 */

$(document).ready(function() {
    let currentComic = 0;

    // Function to get comic data and update the webpage
    function getComicData(comicNumber = '') {
        $.ajax({
            url: `https://xkcd.com/${comicNumber}/info.0.json`,
            type: "GET",
            dataType: "json",
            success: function(data) {
                // Store the current comic number
                currentComic = data.num;

                // Update the webpage with the comic data
                $('#output').html(`
                    <h2>${data.title}</h2>
                    <img src="${data.img}" alt="${data.alt}" title="${data.alt}">
                    <p>${data.alt}</p>
                `);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
            }
        });
    }

    // Load the latest comic on page load
    getComicData();

    // Activate button to load the latest comic
    $('#activate').click(function() {
        getComicData();
    });

    // Previous button to load the previous comic
    $('#prev').click(function() {
        if (currentComic > 1) {
            getComicData(currentComic - 1);
        }
    });

    // Next button to load the next comic
    $('#next').click(function() {
        getComicData(currentComic + 1);
    });
});