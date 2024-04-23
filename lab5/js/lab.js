/*
 * Author: Jianne Soto <Jiasoto@ucsc.edu>
 * Created: 26 April 2024
 * License: Public Domain
 */

// Define variables
var make = "Toyota";
var model = "Corolla S";
var color = "Gray";
var year = 2016;

// Calculate age
var currentYear = new Date().getFullYear();
var age = currentYear - year;

// Output variables using document.writeln()
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + "<br>");