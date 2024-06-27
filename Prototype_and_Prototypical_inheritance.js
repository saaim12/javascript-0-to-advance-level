//When you define a function in JavaScript, it automatically gets a prototype property.
//This prototype property is an object that will be assigned as the prototype of all instances created by the constructor.
//Prototype Chain:

//The prototype chain is a fundamental concept in JavaScript's inheritance model.
// Objects inherit properties and methods from their prototype.


// Define a constructor function
function SustainabilityProject(name, type) {
    this.name = name;
    this.type = type;
}

// Add a method to the prototype
//through this we give them new functions and properties
SustainabilityProject.prototype.displayInfo = function() {
    console.log(`Project Name: ${this.name}, Project Type: ${this.type}`);
};

// Create instances
let project1 = new SustainabilityProject('Eco AI', 'Machine Learning');
let project2 = new SustainabilityProject('Green ML', 'AI');

// Use the method from the prototype
project1.displayInfo(); // Output: Project Name: Eco AI, Project Type: Machine Learning
project2.displayInfo(); // Output: Project Name: Green ML, Project Type: AI
// Explanation:
// Constructor Function:

// SustainabilityProject is a constructor function. When called with the new keyword, it creates a new object with properties name and type.
// Prototype Method:

// displayInfo is added to the SustainabilityProject.prototype. This means all instances of SustainabilityProject will share this method.
// Creating Instances:

// project1 and project2 are instances of SustainabilityProject. They inherit the displayInfo method from SustainabilityProject.prototype.
// Benefits:
// Memory Efficiency: Methods defined on the prototype are shared among all instances, saving memory.
// Dynamic Changes: You can add new methods to the prototype, and they will be immediately available to all instances.
// Conclusion:
// Using prototypes in JavaScript is essential for creating efficient and maintainable code, especially when dealing with many objects that share common methods. This approach aligns well with your interest in machine learning and AI projects, where optimizing performance and structure is crucial. By leveraging prototypes,
//  you can ensure your project is both scalable and resource-efficient.
//



//ptortypical inheritance
// Create a base object
let animal = {
    eats: true,
    walk() {
        console.log('Animal walks');
    }
};

// Create a new object that inherits from animal
let rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats); // true (inherited from animal)
console.log(rabbit.jumps); // true (own property)
rabbit.walk(); // Output: Animal walks (inherited method)
console.log(rabbit); // true (inherited from Object)
//also other builtin methods
//like
console.log(rabbit.hasOwnProperty('jumps')); // true