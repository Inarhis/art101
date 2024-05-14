// Lab 8 - Anon Functions and Callbacks
// Author: Jianne Soto <Jiasoto@ucsc.edu>
// Created: 6 May 2024
// License: Public Domain

// Function to calculate the square of a number
function square(x) {
    return x * x;
}

// Function to calculate the cube of a number
function cube(x) {
    return x * x * x;
}

// Function to double a number
function double(x) {
    return x * 2;
}

// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Use map on the array using the square function as a callback
var squaredNumbers = numbers.map(square);
console.log("Squared numbers:", squaredNumbers);

// Use map on the array using the cube function as a callback
var cubedNumbers = numbers.map(cube);
console.log("Cubed numbers:", cubedNumbers);

// Use map on the array using the double function as a callback
var doubledNumbers = numbers.map(double);
console.log("Doubled numbers:", doubledNumbers);

// Your map results data
 var mapResults = "Your map results here";

// Use jQuery to select the element by its ID and set the HTML content
 $("#output").html(mapResults);