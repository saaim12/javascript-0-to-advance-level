var num1 =10;
var num2 = 20;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2); 
console.log(num1/num2);
console.log(num1%num2);
//this is power operator
var a=2;
var b=3;
console.log(a**b);
console.log(a**=b);
console.log(a);

//following are other operators
 console.log(num1++);
 console.log(num1);

console.log(++num1);
console.log(num1);
console.log(--num1);
console.log(num1);  
console.log(num1+=num2);
console.log(num1-=num2);
console.log(num1*=num2);
console.log(num1/=num2);
console.log(num1%=num2);
console.log(num1**=num2);


//dicount problem
console.log("\n\n");
var listedprice=799;
var sellingprice=199;
var discount=((listedprice-sellingprice)/listedprice) * 100;
console.log(discount);
displaydiscount=Math.round(discount);
console.log(displaydiscount+"%");
console.log(Math.floor(discount));
console.log(Math.ceil(discount));

//this is for the typeof  any variable
console.log("\n\n");
var num1=10;
var num2=20;
var answer=num1>num2;
console.log(answer);
console.log(typeof(answer));

//operators precedences
console.log("\n\n");
var num1=10;
var num2=20;
var answer=num1+num2*2;
console.log(answer);
//these are bitwise operators
var a = 10;
var b = 20;

var c = a & b;
console.log(c);
var d=a|b;
console.log(d);
var e=a^b;
console.log(e);
var f=~a;
console.log(f);
// Here's a summary of some common operators in JavaScript along with their precedence levels (from highest to lowest):

// 1() (grouping)
// 2. (member access)
// 3[] (computed member access)
// 4++ (post-increment), -- (post-decrement)
// ++ (pre-increment), -- (pre-decrement), + (unary plus), - (unary minus), ! (logical NOT), typeof, void, delete (unary operators)
// ** (exponentiation)
// *, /, % (multiplication, division, remainder)
// +, - (addition, subtraction)
// <<, >>, >>> (bitwise left shift, bitwise right shift, unsigned right shift)
// <, <=, >, >=, instanceof, in (relational operators)
// ==, !=, ===, !== (equality and inequality operators)
// & (bitwise AND)
// ^ (bitwise XOR)
// | (bitwise OR)
// && (logical AND)
// || (logical OR)
// ? : (conditional ternary operator)
// =, +=, -=, *=, /=, %=, **=, <<=, >>=, >>>=, &=, ^=, |= (assignment operators)
           
