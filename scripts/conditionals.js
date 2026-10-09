console.log("Conditionals");

// if-statement condition (y/n)
// --- SYNTAX ---
// if(condition){
// code to be run if the condition is true
//}

let result = 80;

if(result > 60){
    console.log("You passed the exam!");
}

// case 1: 5 == 5 ->  true
// case 2: 5 == "5" -> true
// case 3: 5 === "5" -> false

// if-else statement codition (y/n)
// --- SYNTAX ---
// if(condition){
// code to be run if the condition is true
//}else{
// code to be run if the condition is false
//}

let points = 10;
if(points > 60){
    console.log("You won!");
}else{
    console.log("You lose!");
}

// Challenge 1: print if the water is boiling or not
// consider 100 as the boiling temp

let waterTemp = 101;
if(waterTemp > 100){
    console.log("The water is boiling");
}else{
    console.log("The water is not boiling");
}

// else-if condition
// if(condition1){
// code to be run if the condition1 is true
//}else if(condition 2){
// code to be run if the condition2 is true
//}else{
// code to be run if conditions are false
//}


let age = 35;

if(age < 13){
    console.log("you are a child");
}else if(age < 21){
    console.log("you are a teenager");
}else if(age < 64){
    console.log("you are an adult");
}else{
    console.log("you are a senior");
}

//challenge 2: 
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color 
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)

let trafficLight = "green"//prompt("Input a traffic light color:").toLowerCase();
console.log(trafficLight);


if(trafficLight === "green"){
    console.log("Go!");
}else if (trafficLight === "yellow") {
    console.log("Slow down.");
}else if (trafficLight === "red") {
    console.log("Stop.");
}else {
    console.log("Invalid input.");
}

// && and || operators
// && = AND -  both conditions must be true
// || = OR - at least one condition must be true

let hour = 16;

if(hour >= 12 && hour <= 16){
    console.log("Lunch time");
}

let isWeekend = false;
let isHoliday = true;

if(isWeekend || isHoliday){
    console.log("Restaurant is closed today");
}else{
    console.log("Restaurant is open");
}

// if inside a function
// you will need this for the assignment

function checkAge(age){
    if(age >= 18){
        return "Can order alcohol";
    }else{
        return "Cannot order alcohol";
    }
}

let message1 = checkAge(20);
console.log(message1);

let message2 = checkAge(15);
console.log(message2);
