// Arrays, Functions and Objects
// expressions - another way to define a function
// create a variable, assign to function (not value), use variable
// diff - hoisting , use -  arrow function and Libraries.

function addNumber(num1, num2){
    return num1+num2;

}
//function expression
const add = function (num1, num2){// assigned function to variable
    // anonymous function
    return num1+num2;
}
// const thirdValue = add (100,200)
const firstValue = addNumber(5,5);
const secondValue = addNumber(12, 13);
const result = [firstValue, secondValue, add(100,200)]
console.log(result);


//arrow functions
const Addition = (num1,num2)=> num1 * num2;
