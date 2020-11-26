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

let carBrandsSearch = carBrands.filter(function (e) {
  return e.type == "sedan";
});
console.log(carBrandsSearch);

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

function reverseString(str) {
  let r = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  return r;
}

console.log(reverseString("cat"))

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

const arr = ["cat", "cats", "kitty", "kitties"];
const findLargest = (arr = []) => {
  if (!arr.length) {
    return '';
  };
  let res = '';
  res = arr.reduce((acc, val) => {
    return acc.length >= val.length ? acc : val;
  });
  return res;
};
console.log(findLargest(arr));

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
  return arr.reduce((sum, i) => {
    return sum + i.price;
  }, 0)
}
console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

Recursion is a function that calls itself.Recursion can be applied to break down complicated
problems into simpler problems which are easier to solve.The following example computes
the sum of an array of integers:
let sum = function (array) {
  let i = array.length - 1;
  if (i < 0) return 0;
  return array[i] + sum(array.slice(0, i));
};
};



//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part

Two sorting algoriths I will be writing about are Bubble Sorting and Quick Sort.

Bubble sorting is the simplest sorting algorithm When we are bubble sorting, we
are comparing consecutive items.The highest number will bubble its way to the right
with each iteration.In other words, Bubble Sort goes through an entire array until the
list is in ascending order.The benefit of Bubble Sort is that it is easy to understand
and is mostly used as an introduction sorting algorithm but it is quite inefficient, especially
for big data sets.Bubble Sort is not a practical sorting algorithm.When considering selecting
a sorting algorithm, running time is important because efficiency is often thought of in terms
of speed.Bubble sort has an average and worst -case running time of O(n ^ 2) so in most cases, a
faster algorithm is more desirable.

Quick Sort is another algorithm that follows the “divide and conquer” method.The benefit is that
Quick Sort is faster than Bubble Sort, however, the con is that Quick Sort handles cases poorly.
When the list is in almost - sorted order, Quick Sort is going to keep recursing.Quick Sort can be
considered more efficient than Bubble Sort.Quick Sort first creates two smaller arrays and also picks
an index from the array.All the elements of the array are compared with this element and get pushed into
one of the two arrays based on a comparison.The sorting is then done on one of the two arrays.

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
const flipBool = (arr) => { };
const flipBool = (arr) => {
  return arr.map((item) => {
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
