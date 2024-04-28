/*
/
// Author: Jianne Soto <Jiasoto@ucsc.edu>
// Created 29 April 2024 
// License: Public Domain

*/

// Define Variables
var myTransport = ["car", "bike", "bus", "train"];

// Create an object for my main ride
var myMainRide = {
    make: "Toyota",
    model: "Corolla",
    trim: "S",
    year: 2016,
    color: "gray",
    age: function() {
       return 2024 - this.year;
    }
};

// Output myTransport
document.writeln("Kinds of transportation I use: " + myTransport.join(", ") + "<br>");

// Output myMainRide using JSON.stringify() for better formatting
document.writeln("My Main Ride: <pre>" + JSON.stringify(myMainRide, null, '\t') + "</pre>");