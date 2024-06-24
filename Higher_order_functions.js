 function hof(func,arr){
let arr2=[]
    for (let i = 0; i < arr.length; i++) {
        
        
       arr2.push(func(arr[i])) 
    }

return arr2;
}

var arr=[1,2,3,4,5]
var cube = function (x) {
    return x * x * x;
  };

  console.log(hof(cube,arr));
  //it is an example of higher order function
  //it takes another function as an argument and returns a function
  //it is used to abstract the logic of a function
  //it is used to make code more reusable
 
  //it is used to make code more maintainable
  //other examples
  arr.filter((x)=>{return 2?x>2:1})
//it is also a higher order function it takes another function as an argument and returns a function

