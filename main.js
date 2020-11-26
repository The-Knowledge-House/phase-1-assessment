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

carBrands.filter(function (carBrands) {
  return carBrands.type === 'sedan';
});

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

function reverseString(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
reverseString('cat');

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

function longest_string(arr) {
  let max = arr[0].length;
  arr.map(i => max = Math.max(max, i.length));
  result = arr.filter(i => i.length == max);
  return result;
}

console.log(longest_string(['happy', 'sad', 'funny-ish', 'ugh']))

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

result = wishlist.reduce((accumulator, current) => accumulator + current.price, 0);
return result;
}
console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.
/* Recursion is a programming pattern used to simplify larger task.
For example with this function:
function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}

We used JavaScript operators to simplify the function. Although, the function is now harder to understand.*/





//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part

/* 
Bubble Sort:
Bubble Sort starts by locating the highest value in the array and relocating it to the last index. 
Then goes back to the beginning of the array and compares the first two elements and swaps the based on which element is higher, 
moving higher to the back. This continues until all elements in array are sorted. 
Pros: simple code only taking a few lines and little memory used once sorted
Cons: inefficient with the amount of time it takes to sort 

Merge Sort:
Merge Sort is known as the “divide-and-conquer algorithm” because it starts by dividing the array into sub arrays and sorts 
through the separated arrays then merging the sub arrays into the single sorted array. 
Pros: faster sorting also for larger list 
Cons: uses more memory space with storing sub arrays
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
   return arr.map(function(flipBool) {return !flipBool})
};
console.log(flipBool([false, true, false]));


//Bonus:
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
