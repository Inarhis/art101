/*
  Author: Jianne Soto <Jiasoto@ucsc.edu>
  Created: 3 May 2024
  License: Public Domain
*/

// sortUserName - a function that takes user input and sorts the letters
// of their name, ignoring spaces

function sortUserName(userName) {
    // Remove spaces from the user's name
    userName = userName.replace(/\s+/g, '');
    
    // Sort the letters of the name
    var sortedName = userName.split('').sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }).join('');
    
    return sortedName;
}

// Output the sorted name
var userInput = window.prompt("Please enter your name:");
document.writeln("Your sorted name is:" + sortUserName(userInput));

// Output a line break
document.write("<br>");

// sortUserName - a function that takes user input and sorts the letters
// of their name

function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    
    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    
    return nameSorted;
}

// output
document.writeln("Oh hey I fixed your name: ", sortUserName(), "</br>");

// Custom sorting function to sort lowercase and uppercase letters together
function sortUserName(userName) {
    var sortedName = userName.split('').sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }).join('');
    
    return sortedName;
}

// Example usage
var userInput = window.prompt("Please enter your name:");
document.writeln("Your sorted name is: " + sortUserName(userInput));