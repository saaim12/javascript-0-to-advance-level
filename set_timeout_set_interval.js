// Execute a function after 2 seconds
setTimeout(() => {
    console.log('This will be displayed after 2 seconds');
}, 2000);
let timeoutID = setTimeout(() => {
    console.log('This will not be displayed');
}, 20000);

// Cancel the timeout
clearTimeout(timeoutID);
//if i comment line no 10 then it will not be displayed is printed i=on screen after 20 seeconds

