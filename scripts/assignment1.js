// Constants - things that never change
const restaurantName = "La Cantina";
const cuisineType = "Mexican";
const city = "San Diego";

console.log("Restaurant Report");
// Concatenation - Glueing two or more variables/constants 
// with hardcoded values
console.log("Restaurant: " + restaurantName);
console.log("Cuisine: " + cuisineType);
console.log("City: " + city);

// Variables - things that can change day to day
let todaysSpecial = "Tacos al pastor";
let availableTables = 5;
let status = "Open";

console.log("Today's Special: " + todaysSpecial);
console.log("Available Tables: " + availableTables);
console.log("Status: " + status);

// Changing values to variables
status = "Closed";
availableTables = 3; 

// Printing updated report
console.log("Updated Restaurant Report" + "\n" +
    "Restaurant: " + restaurantName + "\n" +
    "Cuisine: " + cuisineType + "\n" +
    "City: " + city + "\n" +
    "Today's Special: " + todaysSpecial + "\n" +
    "Available Tables: " + availableTables + "\n" +
    "Status: " + status);