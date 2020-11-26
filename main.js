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

const filteredSedans = carBrands.filter(cars => {
  return cars.type === 'sedan';
})

console.log(filteredSedans);

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */


function reverseString(string) {
  let compReversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    compReversedString += string[i];
  }
  return compReversedString;
}

console.log(reverseString('cat'));


// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

function longestStringFrArr(array) {
  var longestString = ""; //temporary holding the string that so far has been the longest
  for (i = 0; i < array.length; i++) {
    if (array[i].length > longestString.length) {
      longestString = array[i];
    }
  }
  return longestString;
}

console.log(longestStringFrArr(["car", "cat", "dog", "bird"]));

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
  const wishlistPrices = arr.reduce((accumulator, value) => accumulator + value.price, 0)
  return wishlistPrices
}

console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

//Recursion is the use of a function that can, in itself, call itself inside the same function. An example of recursion is the calculation of a factorial:
// var factorial = function (n) {
//   if (n < 0) {
//     return null
//   } else if (n === 0 || n === 1) {
//     return 1;
//   } 
//     return n * factorial(n - 1);
// };
// console.log(factorial(5));

// Essentially, the function is structured in the following way: The function takes an input, and it passes it through some sort of conditioning statement.If the initial input passes the condition and is deemed true, then the function would return the stipulated for that condition (null). It would stop at that point. If the input does not hold true for the condition, then it would move to the next conditional. If true, it would return the value of 1, and stop. If not true, then it would move to the other part of the function that stipulates the calculations / steps that must be taken with that input value. Here, the input would be used to calculate the factorial (input * factorial (input -1). Here the function calls itself again, and uses itself to multiply the input to a version of the input minus 1.The function would then store that value it returns as its new input value and call it again for the next iteration of the function. Hence, inout value would decrease by one as the function continues to call itself, and continue to multiply the past n values to the new ones (decreasing by 1 each time), until it reaches the point at which one of the other conditionals are true, and stops. The point at which the function stops is called the base case, and it was causes the function to stop calling itself back into itself.

//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part

//Two sorting algorithms are bubble sort and merge sort. 

//Bubble Sort is a sorting algorithm that compares the value of each item in an array to each other in order, by comparing items that are consecutively next to each other. It compares the first value to the second, and if the first value (closest to the left) is smaller, then it keeps both values in the same locations (order). If the number on the left is bigger than the next number (on the right of the pair), then the two numbers would switch places and the number with higher value will be on the right side now. For the next comparison, the previous "right side" value will now be considered the "left side" compared to the next value in the array (consecutive next value) ("right side"). The left side value will be compared to the right side value in the same manner as before. If the left side value is bigger, it would exchange places with the right side value. And the comparison continues with the next consecutive value, until all values are shown to be in order from smallest value to biggest. This algorithm goes back to the beginning to compare all pairs of consecutive numbers unntil this is true. On average, Bubble Sort tends to have a time complexity of O(n ^ 2), which is considered bad if the input size keeps growing. However, when it comes to comparing space complexities, Bubble Sort has an average space complexity of O(1) as the input size grows, which is more efficient. So if space is of concern, but not time, then Bubble Sort would be a good option to consider. While if time is of concern, then Bubble Sort would be a bad option. Bucket Sort that has an average time complexity of O(n), a more efficient time complexity. And has an average space complexity of O(n)

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
