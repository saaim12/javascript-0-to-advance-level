// let promise = new Promise(function(resolve, reject) {
//     console.log("Hello, this is a promise");
//     resolve(56); // Resolve the promise with a value
//      reject("error"); // This line is commented out to demonstrate successful resolution
// });

// console.log(promise);

// promise.then(function(data) {
//     console.log("Resolved:", data);
// }).catch(function(error) {
//     console.log("Rejected:", error);
// });

//another example to show the states of promice
// let promise=new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     //     resolve("success");
//     // },2000);
//     //it will not work because when a promise is resolved it would not be rejected afterwards
//     setTimeout(()=>{
//         reject("error is in promise");
//     },5000);
    
// });
// console.log(promise);
// setTimeout(()=>{
// //method 1:console.log(promise);
// //method 2;
//     promise.then((data)=>{
//         console.log(data);
//     }).catch((error)=>{
//         console.log(error);
//     });
// },2000);


// promise chaining
//first promse is returning 44 second is returning 88 and third is returning error
let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(44);
    },2000);
});
 
promise1.then((value)=>{
    console.log(value);
   let p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(value*2);
        },2000);
    });
    return p2;
}).then((value)=>{
    console.log(value);
    let p3=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("error");
        },2000);
    });
}).then((error)=>{
    console.log(error);
});
 //adding multiple handlers
 promise1.then((value)=>{
    console.log("first handler");
    
 })
 promise1.then((value)=>{
    console.log("second handler");

 })
