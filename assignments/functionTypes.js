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

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
//Function Declaration
function addsOne(n){
  return n+1;
}
//Function Expression
let addsOne = function(n){
  return n+1;

};
//Arrow Function
let addsOne = n => n+1;
//Arrow Function With Curley braces
let addsOne = n => {
  return n+1;
};
// Function Invocation
addsOne(21);
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
//Function Declaration
function subtractsOne(n){
  return n-1;
}
//Function Expression
let subtractsOne= function(n){
  return n-1;
}
// Arrow Function
let subtractsOne =n =>n-1;
//Arrow Function with curly braces
let subtractsOne =n =>{
  return n-1;
};
// Function invocation
subtractsOne(20);
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
//Function declaration
function sum(num1,num2){
  return num1+num2;
}
//Function expression
let sum= function(num1,num2){
  return num1+num2;
}
//Arrow Function
let sum=(num1, num2) => num1+num2;
//Arrow Function with curly braces
let sum=(num1,num2)=>{
  return num1+num2;
};
//Function invocation
sum(10,20);
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
//Fucntion declaration
function sub(x,y){
  return x-y;
}
// Function expression
let sub=function(x,y){
  return x-y;
}
//Arrow Function
let sub=(x,y)=>x-y;
//Arrow Function with curly braces
let sub=(x,y)=>{
  return x-y;
};
//Function invocation
sub(12,2);
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
//Function declaration
function product(x,y){
  return x*y;
}
//Function expression
let product=function(x,y){
  return x*y;
}
//Arrow Function
let product=(x,y)=>x*y;
//Arrow Function with curly braces
let product=(x,y)=>{
  return x*y;
};
//Function invocation
product(10,20);
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
//Function declaration
function division(x,y){
  return(x/y);
}
//Function expression
let division=function(x,y){
  return(x/y);
}
//Arrow Function
let division=(x,y)=>x/y;
//Arrow function with curly braces
let division=(x,y)=>{
  return x/y;
};
//Function invocation
division(20,2);
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
//Function declaration
function square(x){
  return x*x;
}
//Function expression
let square=function(x){
  return x*x;
}
//Arrow Function
let sqaure=(x)=>x*x;
//Arrow function with curly braces
let square=(x)=>{
  return x*x;
};
//Function invocation
square(10);
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
//Function declaration
function calculation(operation,x,y){
  if (operation=="add"){
    return x+y;
  } else if(operation=="subtract"){
    return x-y;
  } else if(operation=="multiply"){
    return x*y;
  } else if(operation=="divide"){
    return x/y;
  } else{
    return "Invalid operation";
  }
}
//Function expression
let calculation=function(operation,x,y){
  if (operation=="add"){
    return x+y;
  } else if(operation=="subtract"){
    return x-y;
  } else if(operation=="multiply"){
    return x*y;
  } else if(operation=="divide"){
    return x/y;
  } else{
    return "Invalid operation";
  }
};
//Arrow function with curly braces
let calculation=(operation,x,y)=>{
  if (operation=="add"){
    return x+y;
  } else if(operation=="subtract"){
    return x-y;
  } else if(operation=="multiply"){
    return x*y;
  } else if(operation=="divide"){
    return x/y;
  } else{
    return "Invalid operation";
  }
};
//Function invocation
calculation("add",x,y);
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
//Function declaration
function greater(x,y){
  if(x>y){
    return true;
  }
}
//Function expression
let greater=function(x,y){
  if(x>y){
    return true;
  }
};
//Arrow Function
let greater=(x,y)=>(x>y?true:false);
//Arrow function with curly braces
let greater=(x,y)=>{
  if(x>y){
    return true; 
};
//Function invocation
greater(20,12);

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
//Function declaration
function lesser(x,y){
  if(x<y){
    return true;
  }
}
//Function expression
let lesser=function(x,y){
  if(x<y){
    return true;
  }
};
//Arrow Function
let lesser=(x,y)=>(x<y?true:false);
//Arrow function with curly braces
let lesser=(x,y)=>{
  if(x<y){
    return true; 
};
//Function invocation
lesser(10,12);

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
//Function declaration
function equal(x,y){
  if(x==y){
    return true;
  }
}
//Function expression
let equal=function(x,y){
  if(x==y){
    return true;
  }
};
//Arrow Function
let equal=(x,y)=>(x==y?true:false);
//Arrow function with curly braces
let equal=(x,y)=>{
  if(x==y){
    return true; 
};
//Function invocation
equal(20,20);

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
  //Function declaration
function smallest(x,y){
  if(x<y){
    return x;
  } else{
    return y;
  }
}
//Function expression
let smallest=function(x,y){
  if(x<y){
    return x;
  } else{
    return y;
  }
};
//Arrow Function
let smallest=(x,y)=>(x<y?x:y);
//Arrow function with curly braces
let smallest=(x,y)=>{
  if(x<y){
    return x;
  } else{
    return y;
  }
};
//Function invocation
smallest(20,12);

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
  //Function declaration
  function largest(x,y){
    if(x>y){
      return x;
    } else{
      return y;
    }
  }
  //Function expression
  let largest=function(x,y){
    if(x>y){
      return x;
    } else{
      return y;
    }
  };
  //Arrow Function
  let largest=(x,y)=>(x>y?x:y);
  //Arrow function with curly braces
  let largest=(x,y)=>{
    if(x>y){
      return x;
    } else{
      return y;
    }
  };
  //Function invocation
  largest(20,12);
  
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
//Function declaration
function even(x){
  if(x%2==0){
    return true;
  }
}
//Function expression
let even=function(x){
  if(x%2==0){
    return true;
  }
};
//Arrow Function
let even=(x)=>(x%2==0?true:false);
//Arrow function with curly braces
let even=(x)=>{
  if(x%2==0){
    return true; 
};
//Function invocation
even(10);
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
//Function declaration
function odd(x){
  if(x%2!==0){
    return true;
  }
}
//Function expression
let odd=function(x){
  if(x%2!==0){
    return true;
  }
};
//Arrow Function
let odd=(x)=>(x%2!==0?true:false);
//Arrow function with curly braces
let odd=(x)=>{
  if(x%2!==0){
    return true; 
};
//Function invocation
odd(13);
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D"   : 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
//Function declaration
function grade(score,total){
  let percentage= score/total*100;
  if(percentage>=90 && percentage<=100){
    return "A";
  } else if(percentage>=80 && percentage<=89){
    return "B";
  } else if(percentage>=70 && percentage<=79){
    return "C";
  } else if(percentage>=60 && percentage<=69){
    return "D";
  } else if(percentage<69){
    return "F";
  } else{
    return "Enter valid number";
  }
}
//Function expression
let grade=function(score,total){
  let percentage= score/total*100;
  if(percentage>=90 && percentage<=100){
    return "A";
  } else if(percentage>=80 && percentage<=89){
    return "B";
  } else if(percentage>=70 && percentage<=79){
    return "C";
  } else if(percentage>=60 && percentage<=69){
    return "D";
  } else if(percentage<69){
    return "F";
  } else{
    return "Enter valid number";
  }

};
//Arrow function with curly braces
let grade=(score,total)=>{
  let percentage= score/total*100;
  if(percentage>=90 && percentage<=100){
    return "A";
  } else if(percentage>=80 && percentage<=89){
    return "B";
  } else if(percentage>=70 && percentage<=79){
    return "C";
  } else if(percentage>=60 && percentage<=69){
    return "D";
  } else if(percentage<69){
    return "F";
  } else{
    return "Enter valid number";
  }
};
//Function invocation
grade(80,100)
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
//Function declaration
function join(word1,word2){
  return word1 +" "+ word2;
}
//Function expression
let join=function(word1,word2){
  return word1 +" "+ word2;
};
//Arrow function
let join=(word1,word2)=>word1 +" "+word2;
//Arrow function with braces
let join=(word1,word2)=>{
  return word1 +" "+ word2;
};
//Function invocation
join("hello","apoorv");