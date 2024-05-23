/*
   FizzBuzz function:
   Loops through numbers 1 to 200, printing "Fizz" if a multiple of 3,
   "Buzz" if a multiple of 5, "Boom" if a multiple of 7,
   and combines them if a multiple of more than one 3, 5, or 7.
   Outputs the result to the output div.

   Author: Jianne Soto <jiasoto@ucsc.edu>
   Date: 27 May 2024
   License: Public Domain
*/

$(document).ready(function() {
  console.log("Document ready"); // Check if document ready event is fired
  
  // Event listener for form submission
  $("#inputForm").submit(function(event) {
      event.preventDefault(); // Prevent default form submission behavior
      console.log("Form submitted"); // Check if form submission event is fired
      const maxNumber = parseInt($("#max").val()); // Get the maximum number from the form
      console.log("Max number:", maxNumber); // Check if max number is retrieved correctly
      fizzBuzz(maxNumber); // Call the fizzBuzz function with the specified maximum number
  });

  // FizzBuzz function
  function fizzBuzz(maxNumber) {
      let output = ""; // Initialize an empty string to store the output

      // Loop through numbers 1 to maxNumber
      for (let i = 1; i <= maxNumber; i++) {
          // Check if the number is a multiple of 3, 5, or 7
          if (i % 3 === 0) {
              output += "Fizz"; // Add Fizz to the output
          }
          if (i % 5 === 0) {
              output += "Buzz"; // Add Buzz to the output
          }
          if (i % 7 === 0) {
              output += "Bang"; // Add Bang to the output
          }

          // If the number is not a multiple of 3, 5, or 7, just add the number
          if (!(i % 3 === 0 || i % 5 === 0 || i % 7 === 0)) {
              output += i; // Add the number to the output
          }

          output += "<br>"; // Add a line break after each number or combination
      }

      // Display the output in the output div
      $("#output div").html(output);
  }
});
