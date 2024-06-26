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
//Await Expression
//The await keyword is used inside async functions to pause execution and wait 
//for the Promise to resolve or reject. It can only be used inside async functions.
fetchData().then(data => {
    console.log(data); // Log the data fetched from the API
}).catch(error => {
    console.error('Error in fetchData:', error); // Handle any errors from fetchData
});
