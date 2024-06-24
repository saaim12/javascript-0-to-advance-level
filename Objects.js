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
// users.forEach(function(user) {
//     console.log(user);
// });
var person = {
    name: "saaim",
    age: 23,
    email: "saymmalik08@gmail.com",
    // object inside an object
    address: {
        street: "123",
        city: "newyork",
        state: "usa"
    },
    // array inside object
    courses_enrolled: [],
    getcourse: function() {
        console.log(`${this.name} is enrolled in ${this.courses_enrolled}`);
    },
    buy_course: function(course) {
        this.courses_enrolled.push(course);
        console.log(`${this.name} is enrolling in ${course}`);
    },
    delete_course: function(course) {
        const index = this.courses_enrolled.indexOf(course);
        if (index !== -1) {
            this.courses_enrolled.splice(index, 1);
            console.log(`${this.name} is unenrolling in ${course}`);
        } else {
            console.log(`${this.name} is not enrolled in ${course}`);
        }
    }
};

person.buy_course("java");
person.buy_course("python");
person.buy_course("c++");
person.getcourse();
person.delete_course("java");
person.delete_course("react");
person.getcourse();

 /*Certainly! In JavaScript,
 the this keyword is a reference to the current execution context.
  In regular functions, the value of this is dynamically determined based on how the function is called.
   It can refer to the object the method is called on or the global object, among other possibilities. On the other hand, arrow functions behave differently.
    They don't have their own this context; instead, they inherit the this value from their surrounding lexical (enclosing) scope. This means that the this in an arrow function is determined by where the arrow function is defined, not where it is executed.
     While this behavior can simplify certain code patterns, it's important to be aware of the differences, especially when using arrow functions as object methods, as they don't bind this to the object itself.
      Understanding these nuances is crucial for writing reliable and maintainable JavaScript code, particularly in scenarios involving object-oriented programming and asynchronous operations.*/
 let a={name:"saaim",
    age:22
 }     
 a.address="123"
 console.log(a)