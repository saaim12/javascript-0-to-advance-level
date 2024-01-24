var user={
    name:"saaim",
    age:23,
    email:"saymmalik08@gmail.com",
    //object inside an object
    address:{
        street:"123",
        city:"newyork",
        state:"usa"
    }


}

//printing methods
// console.log(user.name);
// console.log(user["age"]);
// console.log(user);
//or 
//console.table(user);
//array of objects
var users = [
{ name: "John", age: 25, city: "New York",addresses:{
    street:"123",
    city:"newyork",
    state:"usa"
} },
{ name: "Jane", age: 30, city: "San Francisco",addresses:{
    street:"123",
    city:"newyork",
    state:"usa"
} },
{ name: "Bob", age: 22, city: "Chicago" ,addresses:{
    street:"123",
    city:"newyork",
    state:"usa"
}}
];
users.forEach(function(user) {
    console.log(user);
});