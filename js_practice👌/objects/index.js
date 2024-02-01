//Arrays , Functions and Objects
// Objects - Key/value pairs, Method
// dot notation


const person={
  name:"luffy",
  age: 19,
  friends: ["zoro","sanji","brook"],
  education : true,
  married : false,
   greeting: function (){ //greeting : function ()old feature
  console.log("hey luffy");

   },
}
// dot notation process
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.education);
console.log(person.married);
console.log(person.friends);
console.log(person.friends[1]);

// array process
console.log(person["name"]);

console.log(typeof person);
console.log(typeof person["friends "]);
