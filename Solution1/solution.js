//assigning variable myName to a string
var myName = "Ashley";

//assigning variable myAge to a number
var myAge = 30;

//assigning variable loveToCode to a boolean
var loveToCode = true;

//console logging all the variables
console.log(myName);
console.log(myAge);
console.log(loveToCode);

//Declare a function "printName" that takes "name" as a parameter
function printName(name) {
  //in the function, assign a new variable toPrint which concat "My name is" string with the parameter that is passed
  var toPrint = "My name is" + name;
  //return toPrint
  return toPrint;
}
//Pass myName to printName function and console log the result
console.log(printName(myName));

//write a function expression myFunction that adds num1 and num2
var myFunction = function(num1, num2) {
  var sum = num1 + num2;
  return sum;
};

//console log the result of this function and pass myAge as one of the arugments
console.log(myFunction(myAge, 5));

//declare another function areYouCool which accepts a parameter likeProgramming
function areYouCool(likeProgramming) {
  //if likeProgramming is true, return "You are cool"
  //if likeProgramming is false, return "You should learn how to code"
  if (likeProgramming) {
    return "You are cool";
  } else {
    return "You should learn how to code";
  }
}

//pass loveToCode to areYouCool function, and console log the result
console.log(areYouCool(loveToCode));

//create an empty array myList
var myList = [];

//add strings 'apple', 'orange', 'banana', 'pear', 'grapes' to myList
myList.push("apple");
myList.push("orange");
myList.push("banana");
myList.push("grapes");

//console log my List
console.log(myList);

//remove the last item in myList;
myList.pop();

//remove the first item in myList;
myList.shift();

//add 'pineapple' to the fron to the list;
myList.unshift("pineapple");

//console log the length of myList
console.log(myList.length);

//console log the second item of myList
console.log(myList[1]);

//console log each item from myList
for (let i = 0; i < myList.length; i++) {
  console.log(myList[i]);
}
