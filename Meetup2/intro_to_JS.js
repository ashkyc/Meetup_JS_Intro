//Number
//String
//Boolean
//Undefined
//Null
//Symbol
//Object

var grocery = {
  apples: 5,
  orange: 6,
  avocado: 2
};
grocery[avocado];
grocery.avocado;

//Array

var groceryList = ["apple", "orange", 3];
groceryList[0];

//JavaScript Comparisons
// !==
// ===
// >=
// <=
// >
// <

//JavaScript Variables (to catch and hold values)
//var
//cannot start with number
//cannot start with symbol (okay with $ or _)
//has to start with letter
//camelCase
//let (new in ES6)
//const (new in ES6)

const a = 0;
a = 2;
a;

//prompt("What is your username?")
var first = prompt("enter first number");
var second = prompt("enter second number");
var sum = Number(first) + Number(second);
alert(sum);

//conditional statement
if (1 < 3) {
  return 1 + 3;
} else if (1 === 1) {
  console.log("this is one");
} else {
  console.log("nothing happen");
}

//functional declaration
function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}

multiply(3, 4);

//function expression
var a = function(num1, num2) {
  var result = num1 * num2;
  return result;
};

a(1, 2);

//arrow function
const a = (num1, num2) => {
  var result = num1 * num2;
  return result;
};
