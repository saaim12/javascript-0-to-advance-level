document.addEventListener('DOMContentLoaded', () => {
    console.log('Script is running.');

    let counter = document.querySelector('.counter');
    let increment = document.getElementById('increment');
    let decrement = document.getElementById('decrement');
    let count = 0;

    increment.addEventListener('click', () => {
        count++;
        counter.textContent = count;
    });

    decrement.addEventListener('click', () => {
        count--;
        counter.textContent = count;
    });
});
