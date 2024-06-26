async function fetchData() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error or handle it accordingly
    }
}

fetchData().then(data => {
    console.log(data); // Log the data fetched from the API
}).catch(error => {
    console.error('Error in fetchData:', error); // Handle any errors from fetchData
});

//Async Function
//An async function is a function that operates asynchronously via the event loop, 
//allowing for non-blocking behavior.
// It always returns a Promise, which resolves with the function's return value or rejects with an error thrown by the function.
//Await Expression
//The await keyword is used inside async functions to pause execution and wait 
//for the Promise to resolve or reject. It can only be used inside async functions.
//Syntax:
// async function functionName() {
//     // Async code here
//     return value; // Resolves the promise with 'value' is the returning value of promise
//     // Or throw new Error('error message'); // Rejects the promise with an error
// }/
//async should be at the top of the file