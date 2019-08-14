// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const lastName = "Bond";
let x = () => {
  let firstName = "James";
  return console.log(`My name is ${firstName}, ${firstName} ${lastName}.`)
}

x();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 1 
  return () => {
  count = count * 3.14159
  return count
  }
  // Return a function that when invoked increments and returns a counter variable.
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0
 return{ 
   increment: () => {
    count = count + 1;
     return count
  },
  decrement: () => {
    count = count - 1;
    return count
  }
}
}

const NewCounterFactory = counterFactory();
console.log(NewCounterFactory.increment());
console.log(NewCounterFactory.increment());
console.log(NewCounterFactory.increment());
console.log(NewCounterFactory.decrement())