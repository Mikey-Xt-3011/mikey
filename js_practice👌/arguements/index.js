//arrays - functions and objects
// parameters - when declare/define
// placeholders local variables
//arguements - when invoke/call/run
// in arguements we use variables/values,  multiple parameters, undefined



function java()
{
    console.log("java");
}
//call java
java();
 
function html()
{
    console.log("html");
}
//call html
html();

function data()
{
    console.log("data");
}
//call data
data();

// another process of calling single function in group
// luffy, zoro , sanji are variables 
const luffy = "luffy";  
const zoro = "zoro";
const sanji = "sanji";
function call(name , study) // name is a prameter
{
    console.log("Hello "+name);
    console.log("hello"+name+""+study);

}
call(zoro, " swords men")
//undefined
call();
// call luffy
call("luffy")// when we pass variables in function then it is called arguements
// call zoro
call("zoro")
// call sanji
call("sanji")