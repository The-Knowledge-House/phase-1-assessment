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


const sedans = carBrands.filter( car => { 
  return car.type === "sedan";
})
console.log(sedans);

//output [ { brand: 'Toyota', model: 'camry', type: 'sedan' },
  //        { brand: 'Hyundai', model: 'Sonata', type: 'sedan' } ]

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

 let word = "cat";

function reverse(str) {
  let reversedWord = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedWord.push(str.charAt(i));
  }
  return reversedWord.join("");
}

console.log(reverse(word));

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

let names= [ 'naeem', 'shafee', 'stephanie', 'jahaziel'];

function longestWord(arrOfStrings) {
  let strSplit = arrOfStrings;
  let longestWordlength = 0;
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWordlength){
    longestWordlength = strSplit[i].length;
    lngwrd = strSplit[i];
     }
  }
  console.log(lngwrd);
  return longestWordlength;
}

longestWord(names);

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
  let total = arr.reduce((acc,val) => acc + val.price ,0)
  return total;
}
console.log(shop(wishlist));


// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

//Answer:
//Basically the process in which the function calls itself directly or indirectly is called recursion
//You can say it is the same thing as using any other loop but specially in recursion we call the function 
//inside the body of the function to get it to loop. We give a base part first to cover the base scenario and then use
//the function name to call itself again n again until the condition is met. like in the example shown below,

//One example of a good use of recursion is finding the factorial of a given number

//n is any number you want factorial for
function factorial(n) {  
  
  if (n === 0) {     //This is the condition where we cover the base part/scenario of the recursion algorithm
    return 1; 
    } else if(n < 0){  //here we cover what we want as result if the value of n was less than zero
        return null;
    } else{  
      return n * factorial(n-1);   // this is the where we call the function again for loop over until the condition has been met
      }      
    }

console.log(factorial(4));
//so basically the looping will be like 4*3*2*1
//result will be 24

//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part

// Merge Sort:
// Merge sort works by splitting the input in half, 
// then recursively sorting each half i.e each half will move for example higher number to right and lower to left, 
// and then merging the sorted halves back together.
// Pros: Merge sort runs in O(nlg(n)), basically mean its fast
// Cons: Merge sort takes up alot of space Basically takes more memory.

// Selection Sort:
// Selection sort works by repeatedly selecting the 
// next-smallest element from the unsorted array and moving it to the front and so on and forth
// it will keep on moving one value at a time until it reaches the last value of the array.
// Pros: Selection sort is used when you want to save the memory i.e it takes less amount of space
// Cons: Selection sort is very slow so it is not effecient to be used where speed is required

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
  let convertedArr = arr.map(x => {
    if (x === true){
      return false;
    }else{
      return true;
    }
  })
  return convertedArr;
};

console.log(flipBool([true]))

console.log(flipBool([false, true]))


//Bonus:
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

function FEASTORFAMINE(animal, food) {
  animal = animal.toLowerCase();
  food = food.toLowerCase();

  if (animal.length >= 2 && food.length >= 2) {

    let anm = animal[0] + animal[animal.length - 1];
    let fod = food[0] + food[food.length - 1];

    if (anm === fod) return anm;
    return false;
  }
}

console.log(FEASTORFAMINE('great blue heron', 'garlic naan'));
