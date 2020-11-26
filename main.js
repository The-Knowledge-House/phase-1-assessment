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
const sedans = carBrands.filter((c) => {
  return c.type == "sedan";
});
console.log(sedans);
/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
const reverseString = (str) => {
  if (str === "") {
    return "";
  }
  return reverseString(str.substring(1)) + str.charAt(0);
};
console.log(reverseString("cat"));

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array
const strArr = [
  "Write",
  "a",
  "function",
  "that",
  "takes",
  "an",
  "array",
  "of",
  "strings",
];
const longestStr = (arr) => {
  let longest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
};
console.log(longestStr(strArr));

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
  let totalPrice = arr.reduce((accu, curr) => {
    return accu + curr.price;
  }, 0);
  return totalPrice;
}
console.log(shop(wishlist));

// const shop = wishlist.reduce((accu, curr) => {
//   return accu + curr.price;
// }, 0);
// console.log(shop);

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.
// Explaination - recursion is a method/function that calls upon itself to solve the problem.
//Ex
const isEven = (num) => {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  }
  return isEven(Math.abs(num) - 2);
};
console.log(isEven(23));

//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part
// A. Bubble Sort:
// - A popular way of learning sorting methods,
//     despite inefficiency (Big O(N^2)).
// - It works by:
// - - Iterating through the array and comparing the value of each element
//     with the next one in the array.
// - - The elements swap places if the current one is larger than the
//     adjacent one and moves to the next in the array if it’s smaller.
// - - It repeats this until the end of the sequence and all the larger
//     elements are bubbled up to the top and smallest at bottom.
// B. Quick Sort:
// - The divide and conquer algorithm most commonly used
//   in computer science.
// - Due to needing more comparisons, it is not very
//   efficient with larger arrays.
// - It works by:
// - - Creating two empty arrays to hold the elements smaller and
//     greater than the pivot value.
// - - Then it reccursively sorts through the sub arrays by swapping elements
//     in place and parction a part of the array.z

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
  return arr.map((e) => !e);
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
