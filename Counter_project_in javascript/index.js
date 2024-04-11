console.log('Script is running.'); // Check if this message appears in the console

const counter = document.querySelector('.counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
let count = 0;

increment.addEventListener('onclick', () => {
    count++;
    counter.textContent = count;
});

decrement.addEventListener('click', () => {
    count--;
    counter.textContent = count;
});
