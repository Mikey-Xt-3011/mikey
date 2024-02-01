//Arrays Functions and objects
// return
// default undefined, shortcut, ignore after
//   1 inch 2.54


// return is used to store the value after called the function 
const wallHeight = 90;

function calculate(value)
{
    // console.log("The value in cm is:"+value * 2.54+"cm");
    // const newValue = value * 2.54;
    // return newValue;
    return value * 2.54; //answer (2) [254, 228.6]
console.log("hello");
console.log("hii");
// this console log will not excuse after the return key word in function it ignore the code after return

}
const width =  calculate(100);
const height = calculate(wallHeight);
const dimensions =[width, height];
console.log(dimensions)