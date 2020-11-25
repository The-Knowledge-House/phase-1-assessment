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

const sedans = carBrands.filter((el)=>el.type=="sedan")

console.log(sedans)

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

 function desrever(str){
   let result = "";
   for(let i = str.length-1; i >= 0 ; i--){
     result += str[i]
   }

   return result;
 }

 console.log(desrever("reversed"))

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

function findLongestStr (arr) {
  let longest = "";
  for(let el of arr){
    if(el.length > longest.length){
      longest = el;
    }
  }

  return longest;
}

console.log(findLongestStr(['aaa', 'bbbbb', 'cc', 'ddd']))

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
  return arr.reduce((acc, currIdx)=> {return acc + currIdx.price},0)
}
console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.
/**
 * Recursion is the idea of repeating the same step as many times as needed until we reach our objective, or base case. 
 * For example, if we were to look for a key inside a box full of boxes, with boxes inside those boxes, we could write a recursive function to look for and return this key. 
 * Thinking of this recursively, we can say, if the value inside the box is a key, return key, else open box inside the box. If there is nothing inside the box inside the box, move to the next box. 
 * We could also take into account that there is no such key and return false when all boxes have been opened. 
 */

//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part

/**
 * Bubble Sort
 * One of the simplest algorithms as it takes a few lines of code to write it. Bubble sorth is one of the most innefficient algorithms as its worst time complexity is O(n2), so it is not recommended to be used for working purposes to sort large data sets. Bubble sort makes use of nested loops to compare the first index with the following index. If the following index is smaller, they swap positions -- this step is repeated until the current index is smaller than the following index. Then, we go back to the beginning and the first index will be compared with the following index, so on until we get a sorted list of items. Once all the elements are sorted, the algorithm will run one last time as it needs to loop through all the items without any swap to know the list is sorted. 
 * 
 * Merge Sort
 * One of the most efficient sorting algorithms as it uses the divide and conquer method, where a list is recursively divided in half until there is only one element in the list -- the sorted list, which will then be merged back with another list, compared and then sorted -- we repeat this step as many times as necessary until we reach the top with a sorted list. 
 * Although Merge sort is a really efficient algorithm, with a worst time complexity of O(nlogn), it is a really complex algorithm and space complexity can be an issue depending the size of the data set.
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
  return arr.map((el)=> !el);
};

console.log(flipBool([true, true, false]))

//Bonus:
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

function isMatching (animal, food){
  const animalFirstLast = animal[0]+animal[animal.length-1];
  const foodFirstLast = food[0]+food[food.length-1];

  return (animalFirstLast == foodFirstLast ? foodFirstLast : false);
}

console.log(isMatching('great blue heron', 'garlic naan'))
console.log(isMatching('heron', 'naan'))