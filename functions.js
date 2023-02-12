// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Whats up";
}
var greet1 = greeting();
var greet2 = greeting();

console.log(greet1);
console.log(greet2);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Whats up ${name}`; 
}
var greeting1 = customGreeting("James");
var greeting2 = customGreeting("John");

console.log(greeting1);
console.log(greeting2);


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, middle, last) {
    return `Hello, ${first} ${middle} ${last}!`; 
}
var sisName = greetPerson("Bianca", "Nicole", "Robles");
var myName = greetPerson("Fernando", "Daniel", "Robles");

console.log(myName);
console.log(sisName);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num) {
    var sum = num * num;
    return `The square of ${num} is ${sum}`;
}
var square1 = square(2);
var square2 = square(4);

console.log(square1);
console.log(square2);

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(num, item) {
    if (num > 3) {
    return `${item} is stocked`;  
    } else if (num === 0) {
    return `${item} - OUT of stock!`;
    } else {
    return `${item} - running LOW`;
    }
}
var cheese = checkStock(0, "Cheese");
var coffee = checkStock(4, "Coffee");
var tortillas = checkStock(3, "Tortillas");
var salsa = checkStock(1, "Salsa");

console.log(coffee);
console.log(tortillas);
console.log(cheese);
console.log(salsa);

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"