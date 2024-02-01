// logical operators
//(|| - or),(&& - and), !



//example single condition
const username = "ram";
const age = 30;
if(username === "raj")
{
    console.log("hello how are you");
}
else{
    console.log("wrong values");
}


// or operarator  multiple  condition
const username2 = "ravi";
const age2 = 30;
if(username2 === "ravi" || username2 ==="ram")
{
    console.log("hello how are you");
}
else{
    console.log("wrong values");
}

//&& operator 
if(username2 === "ravi" && age !== "27")
{
    console.log("correct values");
}
else{
    console.log("wrong values");
}
// out put is wrong values because in two conditions one is not matched 
// with another one not satisfied

