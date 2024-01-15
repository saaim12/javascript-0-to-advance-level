//these are fixed and cannot be changed
const name1="saaim";
const age1 = 25;
//this is not possible
//name1 = "saim";

//these are changeable variables
var name="saaim";
var age = 25;
var isMale = true;
var height = 1.70;
var weight = 65;
var country = "Pakistan";
var city = "Karachi";
//these are printing techniques in javascript
console.log("My name is "+name);
console.log("My age is "+age);
   // OR
console.log("My age is "+age+" and my name is "+name);
   //OR
console.log("My age is %d and my name is %s and my height is %f and my weight is %f",age,name,height,weight);
   //OR
console.log(`
  My name is : ${name} 
   My age is : ${age} 
   My height is : ${height}
   My weight is : ${weight}
   `

);