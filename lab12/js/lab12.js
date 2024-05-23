/*
Lab 12: Sorting Hat

   Author: Jianne Soto <Jiasoto@ucsc.edu>
   Date: May 24 2024
   License: Public Domain
*/

// Hogwarts house descriptions
var houseDescriptions = {
    Gryffindor: "Gryffindor values bravery, courage, and chivalry.",
    Ravenclaw: "Ravenclaw values intelligence, wit, and wisdom.",
    Slytherin: "Slytherin values ambition, cunning, and resourcefulness.",
    Hufflepuff: "Hufflepuff values hard work, patience, loyalty, and fair play."
};

// Array of Hogwarts houses
var houses = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];

// Function to sort a name into a Hogwarts house
function sortingHat(name) {
    // Calculate the hash value
    var hash = 0;
    for (var i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    hash = Math.abs(hash);

    // Use modulus to get the remainder when dividing by the number of houses
    var mod = hash % houses.length;

    // Get the name of the house
    var house = houses[mod];

    // Get the description of the house
    var description = houseDescriptions[house];

    // Return the name and description of the house
    return {
        name: house,
        description: description
    };
}

// Click listener for the button
$('#button').click(function() {
    // Get the value of the input field
    var name = $('#input').val();

    // Sort the name into a Hogwarts house
    var house = sortingHat(name);

    // Display the result
    $('#output').append('<p class="sorted">The Sorting Hat has sorted you into ' + house.name + '. ' + house.description + '</p>');
});