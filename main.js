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

let filtered = carBrands.filter((item) => {
  return item.type === "sedan";
});

console.log(filtered);

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

function reverseString(str) {
  let arr = [];
  let split = str.split("");

  for (item of split) {
    arr.unshift(item);
  }

  return arr.join("");
}

console.log(reverseString("cat"));

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

let strArr = ['Bob', 'Jane', 'Timothy', 'Marge', 'Shafee'];

function longestStr(arr) {
  return arr.reduce((acc, val) => {
    if (acc.length > val.length) {
      return acc;
    } else {
      return val;
    }
  }, '');
}


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
  let reduced = arr.reduce((acc, val) => {
    return acc + val.price;
  }, 0);
  return reduced;
}

console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

/* ANSWER

Recursion (in CS) is a method in which a function calls itself until a base case is met. Each time a function calls itself, that call will be put on the stack. Like putting cards on a stack. Then it will be removed as soon as the call conditions go through.


*/

// EXAMPLE OF RECURSION:

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

console.log(sum([1, 2, 3, 4, 5, 6]));

// EXPLANATION:

/* 

First we see base case is if the array length is equal to 0. In other words if the array is empty. If that's the case, return 0, and fulfill the other calls with this new information.

So we return the first item of the array, plus the next index, and removing an item from the array each time.

sum(1, 2, 3, 4, 5, 6)
sum(2, 3, 4, 5, 6)
sum(3, 4, 5, 6)
sum(4, 5, 6)
sum(5, 6)
sum(6)
0
0 + 1
1 + 2
3 + 3
6 + 4
10 + 5
15 + 6


*/

//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part

/* ANSWER:

NUMBER ONE: BUBBLE SORT

Bubble sort is a sorting algorithm where the largest value travels up to the end of an array by comparing the number to the right of it. We analyze the first two elements, and if their conditions are not met, we swap them. Then it moves onto the next element and does a pair analysis with that. Its worst complexity is O(n^2), because we're dealing with a nested loop. 

Pros include easier to implement than other algorithims. Good intro to learning how other sorting algos work.

So the cons are it's pretty slow. It's also not used widely at all in the industry, except for interview purposes mostly. Highly inefficient.



NUMBER TWO: SELECTION SORT 

Selection sort works by selecting the smallest number of the array. Then moves it to the front of the array. That's sorted. Then, it does the process over again, excluding our already sorted first item. It has an O(n^2).

Pros include that's it's conceptually intuitive. It can be used on list structures, such as linked lists. The way it swaps is O(n).

Cons include a static time complexity for O(n^2), meaning that's always going to be it's time complexity. Really slow, especially on big data sets.


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
  return arr.map(item => !item);
};

console.log(flipBool([false, true, false, false, true]));

//Bonus:
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

function feastOrFamine(animal, food) {
  animal = animal.toLowerCase();
  food = food.toLowerCase();

  if (animal.length >= 2 && food.length >= 2) {

    let animalFL = animal[0] + animal[animal.length - 1];
    let foodFL = food[0] + food[food.length - 1];

    if (animalFL === foodFL) return animalFL;
    return false;
  }
}

console.log(feastOrFamine('great blue heron', 'garlic naan'));