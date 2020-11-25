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
const sendans = carBrands.filter((car) => {
  return car.type === "sedan";
});
console.log(sendans);

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
const reverseString = (someString: string): string => {
  const stringArray = someString.split("");
  const tempArray: string[] = [];
  stringArray.forEach((character) => {
    tempArray.unshift(character);
  });
  return tempArray.join("");
};

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array
const longestStringInArray = (arrayOfStrings: string[]): string => {
  let stringToReturn = "";
  arrayOfStrings.forEach((currentString: string) => {
    if (currentString.length > stringToReturn.length) {
      stringToReturn = currentString;
    }
  });
  return stringToReturn;
};

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
interface wishlistItem {
  title: string;
  price: number;
}
function shop(arr: wishlistItem[]): number {
  return arr.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
}

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.
/**
 * recursion in programming is when a fucntion calls it's self
 * finding the factorial of anumbre is usually done recursively
 * You provide "bases cases" so that the function doesn't call itself to infinity
 * in this case the base cases would be if given a number, n, it is equal to 1 return 1
 * or if n is equal to - return 1
 * then the factorial function calls itself with the argument n -1
 * what you want to return is n * factorial(n-1)
 * This way when the factorial function reaches the base case of 0 or 1 it will just return 1 and it can evaluate the fill of expression of
 * n * (n-1) * (n-2) * ... * (n - (n-2)) * 1
 * There is more that's going on here with this idea of the function call stack but I won't get into that
 */

//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part

//bubble sort
/**
 * gven an array go through array swapping numbers that are out of order
 * go through the array as many times as it takes until the array is sorted that means that all the numbers are in the right order thats means you didn't perform any swaps
 * pros: easiest to implement
 * cons: O(n^2) time complexity which is garb
 *
 */
/** quick sort
 * divide and conquer algorithm
 * i.e. breaks the problem down into smaller chunks
 * basically it's  partitioning algorithm
 * You pick your partitiion
 * could be the first element or the last element or the middle or random
 * then you put all elements in the array that are greater than the partition to the right of the partition and all elements that are elss than the partition to the left of the aprtition
 * these are your to new arrays which you will now partition and repeat the process until you are left with singular values
 * yuo combine all of the arrays with single values in them and you get an array that is sorted
 * pros: time complexity is  at worst O(n^2) and best case is O( nlogn )
 * cons: very interesting to implement
 *
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
const flipBool = (arr: boolean[]) => {
  return arr.map((currentBool: boolean) => {
    return !currentBool;
  });
};

//Bonus:
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
