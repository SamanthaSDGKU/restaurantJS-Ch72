// Void Function
// Step 1:  Declare the function
function login(){
    console.log("Welcome to the system!");
    console.log("My name is Luis!");
};

// Step 2: Call the function
login();

// Functions with parameters
function logout(user){
    console.log("Goodbye " + user + " see you later!");
};

logout("Jorden");
logout("Luis");

function gradeExam(student, correctItem, points){
    let totalPoints = correctItem * points;
    console.log(`${student} grade of the exam is: ${totalPoints}`);
};

gradeExam("Luis", 10, 0.33);
gradeExam("Ryan", 13, 0.33);
// gradeExam();

// Functions with return
function add(num1, num2){
    let total = num1 + num2;
    return total;
};

let x = add(10,12);
console.log("The result is: " + x);
console.log(x - 5);