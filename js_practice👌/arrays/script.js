// arrays , function  and objects
// arrays - [], 0 index based
const fruit1 = "apple"
const fruit2 = "banana"
const  fruit3 = " cherries"
const  fruit4 = " berries"
const  fruit5 = "black beries"

 const fruitlist =[ 
    "apple",
    "banana",
    "cherries",
    "berries",
    "black beries",
    5,
    undefined,
    null,
    true,
    false,
 ];
 // const fruitlist =[0,1,2,3,4,5,6,7,......]
 console.log(fruitlist);
 console.log(fruitlist[2]);

 let bestfruit = fruitlist[4]//storing in variable
 console.log(bestfruit);

  fruitlist[5] = "grapes";// changing 5 index 
  console.log(fruitlist);