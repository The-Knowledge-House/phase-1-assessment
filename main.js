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

const car = carBrands.filter(function (car) {
  return car.type === "sedan";
});
console.log(car);
/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array
let arr = ["where", "we", "bout", "to", "eat", "at"];
function hunger() {
  let stuffed = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      stuffed.push(arr[i]);
    }
  }
  return stuffed;
}

let hungry = arr.reduce((food, moreFood) => {
  return food.length > moreFood.length;
});

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
let shop = wishlist.reduce((acc, value) => {
  return acc + value.price;
}, 0);

console.log(shop);
// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.
// ANSWER BELOW
// A recursive function is a fuction that continues to call on itself until it doesnt. You set a base case which is the iteration for the recursion function, the function will continue to call itself until it meets the base case. We set the base case to prevent the function from going into an infinte loop.

//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part
//Answer Below
//  Here is how Bubble Sort works, If we were to look at an array of numbers arr = 9,7,5,2,6. Bubble Sort will look at the first two indexes 0, and 1, and if the number on the left is bigger than the right it will swap the number. This will continue to bubble up and keep going down the length of the array until all numbers are in squential order. Pros for Bubble Sort are that is can be used for external sorting, the cons for Bubble Sort are that it take a long time to run. Next we have MergeSort works like this it takes the "Divide and Conquer" approach. MergeSort will find the middle of the array and split it into two halves, it takes smaller chucks of the algo apart to solve the bigger picture. Pros for mergeSort is that it can quickly tackle large list, cons or worst case is it space complexity falls under o(n).

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
  arr.map(function (word) {
    return !word;
  });
};
flipBool = arr.map(function (word) {
  return;
  !word;
});
//Bonus:
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

function animalFood(animal, food) {
  let firstA = animal[0];
  let lastA = animal[animal.length - 1];

  let firstF = food[0];
  let lastF = food[food.length - 1];

  if (firstA === firstF && lastA === lastF) {
    return firstA + lastA;
  } else {
    return false;
  }
}
