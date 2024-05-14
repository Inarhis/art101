/*
   lab.js - This simple JavaScript/jQuery script gets a value from input fields and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Jianne Soto <Jiasoto@ucsc.edu>
   Date: May 20 2024
   License: Public Domain
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// Checks if two strings are anagrams of each other
function isAnagram(str1, str2) {
    // Remove non-word characters and convert to lowercase for comparison
    const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();
    
    // Sort the characters and compare
    return sortString(cleanStr1) === sortString(cleanStr2);
}

// Wait for the document to be fully loaded
$(document).ready(function() {
    // click listener for button
    $("#submit").click(function(){
        // Get values of input fields
        const firstName = $("#first-name").val();
        const lastName = $("#last-name").val();
        
        // Check if the names are anagrams
        const result = isAnagram(firstName, lastName) ? 'Yes' : 'No';
        
        // Output the result
        $("#output").html('<div class="text"><p>Are ' + firstName + ' and ' + lastName + ' anagrams? ' + result + '</p></div>');
    });
});