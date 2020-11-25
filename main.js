// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
  { brand: "Ford", model: "mustang", type: "convertible" },
  { brand: "Toyota", model: "camry", type: "sedan" },
  { brand: "Ram", model: "1500", type: "pickup" },
  { brand: "Hyundai", model: "Sonata", type: "sedan" },
  { brand: "Jeep", model: "wrangler", type: "suv" },
  { brand: "Nissan", model: "frontier", type: "pickup" },
];

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */



// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array



// 4.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005
let wishlist = [
  { title: "tesla", price: 90000 },
  { title: "tesla", price: 45000 },
  { title: "tesla", price: 5 },
  { title: "tesla", price: 2000 },
  { title: "tesla", price: 90000 },
];
function shop(arr) {}
console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

// RECURSION

// Recursion is a method of iterating over an operation by having a function call itself over and over again until it arrives at the intended result (base case) and stops.  If there is no stopping condition in a recursive function, it can become an infinite loop, which can crash your browser.

// The benefit of recursive functions are when a function is needed repeatedly with different parameters from within a loop. 

// An example of a recursive function is;

function recurse() {
  if(condition) {         // the base condition "base case" is met
      recurse();         // recursively call back the function
  }
  else {                 // once the condition is met,
      // stop calling recurse() - the function stops calling itself
  }
}

recurse();

//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part

// MERGE SORT

// Merge sort works by splitting the list or input in half, and iterating through each half recursively, and then merging the sorted data back together.

// Benefits: Super fast, as it breaks up the data into chunks and sorts them simultaneously, and runs on O(n lg(n)), which means that it scales as 'n' grows. 

// Cons: Merge sort has a poor space complexity, taking up O(n) extra space because of the recursive call stack.


// SELCTION SORT

// Selection sort works by iterating through the data and repeatedly selecting the next smallest item from an unsorted array, and moving it to the front of the array.

// Benefits: It is space efficient becasue it only requires a constant amount of additional space.

// Cons: The time complexity for this sort is very poor, especially for very large data sets because it takes O(n2) time, even if the input is already sorted.


/*  7.
 * flipBool takes an array of Boolean values
 * it should call map on the array and flip
 * each Boolean value to its opposite,
 * e.g., flipBool([true]) => [false]
 *       flipBool([false, true]) => [true, false]
 *       etc
 * then return the new array
 * Be sure to use map()!
 */
const flipBool = (arr) => {};



//Bonus:
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
