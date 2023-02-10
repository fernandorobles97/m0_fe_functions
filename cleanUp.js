// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?");
 }

askForName();

// The first thing I changed was the positioning of the console log to demonstrate a proper code block, 
// and added some semi-colons for the sake of convention.

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

// I changed the location of the closing curly bracket for the code block to be at the beggining of the line,
// I hit tab once on the lines with beginning with var and return,and I also added a semi-colon at the end of the sum variable
// because this is the correct syntax and follows code block convention. 

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");   
}

makeFreshPesto();

// There needs to be a space after the parentheses of the function, otherwise the code will not work. The 'function' keyword 
// is as I just typed, and is not 'func'. I moved the closing curly bracket from a few spaces down after the last console log
// to be at the start of the next line because this is correct code block syntax.

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg
  }

// The code block syntax needs to be more conventional, to correct it I have moved the opening curly bracket to be one space 
// after the closing function parentheses. I have also used tab to move the sum variable forward and used delete to bring the 
// sum variable to have a similiar beginning point as the sum variable. I have deleted the line gap between return and the rest
// of the instructions; I also hit tab so it could have the same starting point as the other instructions listed.