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
function sedan(car){

  const brand = car.filter(user => {
    return user.type === `sedan`;
   })
  
   return brand;

}

console.log(sedan(carBrands));

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString('cat'));
// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array
let long = ['ayman','jenfer','shan', 'aysjkdksdfhkdf'];

function longestString(str){
  return str.reduce(function(a, b) { 
    return a.length > b.length ? a : b
  }, '');

}
console.log(longestString(long));





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
function shop(arr) {
  let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0)
  return sum;


}
console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.
 // If the number is less than 0, reject it.
 

///// Recursion is a process in which a function calls itself as a subroutine.
// This allows the function to be repeated several times, since it calls itself during its execution.
// Functions that incorporate recursion are called recursive functions
function factorialize(num) {
  // If the number is less than 0, reject it.
  if (num < 0) 
        return -1;
    
  // If the number is 0, its factorial is 1.
  else if (num == 0) 
      return 1;
    
  // Otherwise, call the recursive procedure again
    else {
        return (num * factorialize(num - 1));
    }
  }

  console.log(factorialize(4));




//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part
/// 1-  bubble sort  -
// pros:Can be used for external sorting.// the array is almost sorted.
//   time complexity: 𝑂(𝑛2) O(n2)in worst case and average case.
// cons: amount of time it takes to sort
// on2 - quadratic time
// Quadratic Time Complexity represents an algorithm
// whose performance is directly proportional to the squared size of
// the input data set(think of Linear, but squared).Within our programs,
// this time complexity will occur whenever we nest over multiple iterations within 
 

/// 2-merge sort  -
//// Merge sort uses the concept of divide-and-conquer to sort the given list of elements. It breaks down the problem 
//into smaller subproblems until they become simple enough to solve directly.

//   pros: It is quicker for larger lists
//   time complexity: o(n log(n))
//   cons:worst case space complexity : o(n)




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
const flipBool = (arr) => {
  return arr.map((item)=>{
    return !item
  })
};
console.log(flipBool([true]));
console.log(flipBool([false, true]));

//Bonus:
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
 function firstLast(first, tow){
let a =first.split('')
let b= tow.split('')
if(a[0]===b[0]&& a[a.length-1] ===b[b.length-1]){
 return `${a[0]+ a[a.length-1]} `
}
 

  
 }
 console.log(firstLast("great blue heron", "garlic naan"));