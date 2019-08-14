// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End
======================================================
/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
 //Function Decleration
 function param(n) {
  return ++number;
}

// Function Expression
var param = function(n) {
 return ++n;
}

//Arrow Function Without Curly Braces
var param = (n) => ++n;
//Arrow Function With Curly Braces
var param = (n) => {
 return ++number;
}

// Function Invocation
param(2)


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
//Function Decleration
function param(number) {
  return --number;
}

// Function Expression
//Function Decleration
function param(number) {
  return --number;
}

// Function Expression
var param = function(n) {
 return --n;
}

//Arrow Function Without Curly Braces
var param = (n) => --n;
//Arrow Function With Curly Braces
var param = (n) => {
 return --n;
}
var param = function(n) {
  return --n;
 }

//Arrow Function Without Curly Braces
var param = (n) => --n;
//Arrow Function With Curly Braces
var param = (n) => {
 return --n;
}
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
//Function Decleration
function param(x,y) {
  return (x+y);
}

// Function Expression
var param = function(x,y) {
 return (x+y)
}
//Function Decleration
function param(x,y) {
  return (x+y);
}
// Function Expression
var param = function(x,y) {
 return (x+y)
}

//Arrow Function Without Curly Braces
var param = (x,y) => x+y;
//Arrow Function With Curly Braces
var param = (x,y) => {
 return (x+y);
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
//Function Decleration
function param(x,y) {
  return (x-y);
}
// Function Expression
var param = function(x,y) {
 return (x-y);
}
//Arrow Function Without Curly Braces
var param = (x,y) => (x-y);
//Arrow Function With Curly Braces
var param = (x,y) => {
 return (x-y);
}
// Function Invocation
param(5,4)

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function param(x,y) {
  return (x*y);
}

// Function Expression
var param = function(x,y) {
 return (x*y);
}

//Arrow Function Without Curly Braces
var param = (x,y) => (x*y);
//Arrow Function With Curly Braces
var param = (x,y) => {
 return (x*y);
}
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
//Function Decleration
function param(x,y) {
  return (x/y);
}
// Function Expression
var param = function(x,y) {
 return (x/y);
}
//Arrow Function Without Curly Braces
var param = (x,y) => (x/y);
//Arrow Function Wih Curly Braces
var param = (x,y) => {
 return (x/y);
}
// Function Invocation
param(4,2)
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
//Function Decleration
function param(x) {
  return (x**2);
}
// Function Expression
var param = function(x){
 return (x**2);
} 
//Arrow Function Without Curly Braces
var param = (x) => x**2;
//Arrow Function Wih Curly Braces
var param = (x) => {
 return (x**2);
}
// Function Invocation
param(2)

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
//Function Decleration
function param(x) {
  return (x**2);
}
// Function Expression
var param = function(x){
 return (x**2);
} 
//Arrow Function Without Curly Braces
var param = (x) => x**2;
//Arrow Function Wih Curly Braces
var param = (x) => {
 return (x**2);
}
// Function Invocation
param(2)

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
//function declaration
var a = 5 , b= 3;
function comp(a, b){
  if(a>b){
    return a;
  }
  else{return b;}
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
//function declaration
var a = 5 , b= 3;
function comp(a, b){
  if(a>b){
    return true;
  }
  else{return false;}
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function param(a,b) {
  if (a==b) {
    return true;
  }
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function param(x,y) {
	if (x < y) {
		return x;
	}
	else if ( y < x) {
		return y;
	}
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function param(x,y) {
	if (x > y) {
		return x;
	}
	else if ( y > x) {
		return y;
	}
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function param(n) {
  if(n%2==0) {
    return true;
  }
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function param(n) {
  if(n%2==1) {
    return true;
  }
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function $grade(marks,totalmarks) {
	var percentage = marks/totalmarks*100;
	switch(true){
		case (percentage<=100 && percentage>=90):
		alert("A");
		break;
		case (percentage<=89 && percentage>=80):
		alert("B");
		break;
		case (percentage<=79 && percentage>=70):
		alert("C");
		break;
		case (percentage<=69 && percentage>=60):
		alert("D");
		break;
		case (percentage<=50 && percentage>=0):
		alert("F");
		break;

	}
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function param(word1,word2){
  return ("string1" + " " + "string2");
  }