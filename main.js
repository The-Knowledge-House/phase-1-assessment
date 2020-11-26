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

  function onlySedans (arr) {
    return arr.filter(function(el){
      return el.type === "sedan";
    })
  }
  console.log(onlySedans(carBrands));

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

function findLongest (arr) {
  let longest = arr.sort(function (a, b) { return b.length - a.length })[0];
  return longest;
}


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
  return arr.reduce((acc,curVal)=> {return acc + curVal.price}, 0);
}
console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part

/*

The two sorting algorithms that I will explain are:

Bubble Sort & Merge Sort

Bubble Sort is the process of comparing the current and adjacent elements in
an array and swapping them with each other if they are in the wrong order 
(i.e. if the adjacent element is lower/less-than than the current). 
The term ‘bubble’ comes from this process of ‘bubbling’ the values to the left 
of the array as it passes through and continuing to repeat this process 
(passing through and sorting pairs of elements in the array) until it 
successfully goes one whole pass without any swap, in which the algorithm will then know it is sorted.
The benefits of bubble sort are that it is simple and a good way to be introduced to sorting algorithms.
The cons of bubble sort are that it can have very bad runtime and is considered one of the slowest algo's 
especially when given much larger arrays which loses a company money and resources.

An example of bubble sort on an array can be seen below:

First Pass:
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, the algorithm compares the first two elements ([5,1]), and swaps them since 5 > 1.

Now the array is ( 1 5 4 2 8 ).

( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), the algorithm does not swap them.

Bubble sort will continue to make passes through the array as seen above and swap elements until it is completely sorted.

------ Merge Sort ---------
Merge Sort is the process of splitting an array into two separate arrays it works by ...
The benefits of merge sort are that it is fast/reliable and works best for most of the time.
The cons of merge sort are that it is not stable.

*/


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
  return arr.map(function(el) {return !el});
};

console.log(flipBool([true, true, true, true, false]));

//Bonus:
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
