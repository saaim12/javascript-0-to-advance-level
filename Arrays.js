// methods for declaration of arrays in javascript
//1:
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'orange', 'banana'];

//2: with array constructor
let numbers1 = new Array(1, 2, 3, 4, 5);
let fruits1 = new Array('apple', 'orange', 'banana');
//3: woth array of
let numbers2 = Array.of(1, 2, 3, 4, 5);
let fruits2 = Array.of('apple', 'orange', 'banana');

//printing
console.log(numbers);
console.log(fruits);
console.log(numbers1);
console.log(fruits1);
console.log(numbers2);
console.log(fruits2);

//methods for accessing elements in array
//1:
console.log(numbers[0]);
console.log(fruits[1]);

//to remove last element from array
fruits.pop();
console.log(fruits);
//to add last element in array
fruits.push('grapes');
console.log(fruits);
//to remove first element from array
fruits.shift();
console.log(fruits);
//to add first element in array
fruits.unshift('mango');
console.log(fruits);

//a very useful method for arrays
let evennumbers =[2,4,6,8,10];
const iseven = (num) => { return num%2===0? true: false; };
console.log(evennumbers.every(iseven));