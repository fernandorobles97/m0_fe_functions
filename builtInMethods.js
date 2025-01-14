// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The includes() method is called on the string "Hello World". The string "Hello" is passed as an argument; if the string that was
// passed in as an argument is included in the string the method is calling on, it will return true, if not, it will return false.
// The return value is true.
"Hello World".includes("Hello");

// The endsWith() method is called on the string "Hello World". The string "Hello" is passed as an argument; if the string that the
// method called on ends with the string that is being passed in as an argument, it will return true, if not, it will return false.
// The return value is false.
"Hello World".endsWith("Hello");

// The endsWith() method is called on the string "Hello World". The string "rld" is passed as an argument; if the string that the
// method called on ends with the string that is being passed in as an argument, it will return true, if not, it will return false.
// The return value is true.
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));


// The endsWith() method is called on the lastName variable, which stores the string object "Robles".
// The endsWith() method will return true if the lastName variable ends with the argument being passed in.
// The return value here will be true because "Robles" does end with "les".
// The console.log() statement will print the return value of the endsWith() method (true) to the console.
var lastName = "Robles";
console.log(lastName.endsWith("les"));

// The includes() method is called on the middleName variable, which stores the string object "Daniel".
// The includes() method will return true if the middleName variable includes the argument being passed in.
// The return value here will be false because "DanIel" has a capitalized I, which is not included in the middleName variable's value.
// The console.log() statement will print the return value of the includes() method (false) to the console.
var middleName = "Daniel";
console.log(middleName.includes("DanIel"));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// The toString() method is called on the cats variable, which stores an Array containing 4 string elements.
// The toString() method will return all the elements separated by commas in a single-string representation of the Array.
// The return value will be 'Jonesy,Wiggum,Hunter,Rocky' because these are all the elements from the Array.
// The console.log() statement will print the return value of the toString() method (Jonesy,Wiggum,Hunter,Rocky) to the console.
var cats = ["Jonesy", "Wiggum", "Hunter", "Rocky"];
console.log(cats.toString());

// The pop() method is called on the coolNumbers variable, which stores an Array containing 4 Number elements.
// The pop() method will return the last element from an Array, as well as remove it from the Array.
// The return value will be '66' because it is the last element in the array.
// The console.log() statement will print the return value of the pop() method (66) to the console.
var coolNumbers = [97, 21, 55, 66];
console.log(coolNumbers.pop());