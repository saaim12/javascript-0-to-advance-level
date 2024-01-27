//example 1
function sum(a,b){
    return a+b;
}
function callbacksum(a,b,callbacksum){
    
    callbacksum(a,b);
}
var s=callbacksum(1,2,sum);
console.log(s);
//example 2
function callbacksum2(a,b,callback){
    callback(a,b);
};
callbacksum2(1,2,(a,b)=>console.log(a+b));