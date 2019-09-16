1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
// your code goes here
```
function calDogAge(age) {
var dogage = age*7;
console.log("Your doggie is " + dogage +"years old in dog years!");
}
alert("Your doggie is " + calDogage() + "  years old in dog years!");

2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
function calculateSupply(age, amountperday) {
  var max_age = 40;
  cons
}
```
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js
function celsiusToFahrenheit(celsius_temperature) {
  var fahrenheit_temperature =  (celsius_temperature * 9/5) + 32;
  console.log(fahrenheit_temperature);

}
function fahrenheit_temperature(fahrenheit_temperature) {
  var celsius_temperature = (fahrenheit_temperature − 32) * 5/9;
}
```
4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
```
  4.1 🎖Convert the above function using ternary operator.
  ```js
function checkAge(age) {
  ( age > 18 ; return true ? return true : return false );
}
  ```

  4.2 🎖Convert the above function using `||` operator.
  ```js
  function checkAge(age) {
    ( age > 18 ; return true || age < 18 ; return false );
  
}
  ```
Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
```
Is there any difference in the behavior of these two variants? If there is what is that?


5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
// Your code goes here
var x = + prompt("Enter a Number");
var n = + prompt("Enter The Power");

function pow(x, n) {
  if(n < 0) {
    alert("The number below 1 is not allowed");
  }
else if (x < 0) {
alert("The number below 1 is not allowed");
}
  else {
    alert(x**n);
  }
}
After writing code uncomment to check the answer.
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1

==============================================
var x = + prompt("Enter a Number");
var n = + prompt("Enter The Power");
var i;
function calc(x , n) {
  for(i=0; i<=n; i++){
    x = x*x;
  }
  return x;
}
alert(calc());
// After writing code uncomment to check the answer.
// pow(3, 2); // 9
// pow(3, 3); // 27
// pow(1, 100); // 1
// pow(-31, 2); // "The number below 1 is not allowed"

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.

// your code goes here

var total = 1;
var $num = + prompt("Enter a Number");
var $com = prompt("Sum'+' or Prouduct'*'");
if($com == "+"){
    for(var i=2; i<=$num; i++){
        total = total+i;
    }
}
else if($com == "*"){
    for(var i=2; i<=$num; i++){
        total = total*i;
    }
}
alert(total);

6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

```js
var $num = + prompt(Enter a Number);
var total = 0;
for(var i=0; i<=$num; i++){
        total = total+i;
}
alert(total)
```

7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20)


```js
var $num = + prompt("Enter a Number");
for(var i=0; i<=$num; i++){
  if(i%5==0 || i%7==0){
    console.log(i)
  }
}
```


8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
function min(x, y) {
  if (x <= y) {
    console.log(x);
  }
  else {
    console(y);
  }

}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
-------------------------------
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```
var $input1 = + prompt("Enter First Number");
var $input2 = + prompt("Enter Secound Number");

function min($input1 , input2) {
  if ($input1 > $input2) {
    return $input2 ;
  }

  else{
    return $input1 ;
  }
}

alert(min());
