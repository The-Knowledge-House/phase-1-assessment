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

const result = carBrands.filter(function (carObj) {
  return (carObj.type === 'sedan')
})
console.log(result)

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

function reverseString(str) {
  let resultString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    resultString += str[i]
  }
  return resultString;
}

console.log(reverseString("hello"))

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array


function longestString(strArr) {
  let length = 0;
  let longest;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > length) {
      length = strArr[i].length;
      longest = strArr[i];
    }
  }
  return longest
}
console.log(longestString(['first', 'second', 'third']))


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
  let finalPrice = arr.reduce((acc, cur) => acc + cur.price, 0);
  return finalPrice;
}
console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

/* #5 answer:
In simple terms recursion is a function that will call itself. Recursion is usually applied when
an algorithmic problem can be solved by being divided into smaller problems.These smaller problems
can use the same algorithm to solve them. Recursive functions need an ending condition to make sure
that it doesn't call itself more than needed. One example of a recursive algorithm is the fibbonacci
sequence algorithm where if you're given an index you would return the number value within the sequence.
If you look at the fibbonacci pattern, you can see that in simple math it is generally 
f(n) = f(n-1) + f(n-2). For example the sequence is [1,1,2,3,5,8]. So if we wanted to return 8, the 
input index number should be 5 In regular code you could use a while loop so that as long as the input 
is greater than 0 it will run, calculate the next number by adding the current index value to the last one,
and return the correct index value. 

Ex: function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

When we use recursion to rewrite this solution it turns into a simple two lines of code. 

function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

It checks the base case to ensure that the value is greater than 0 and then calls itself continueously
until it can finally get the current index value.  
 */


//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part

/* #6 answer: 
MergeSort is a decently efficient alogorithm and works on the idea of dividing and conquering.
It breaks down into lists and smaller sublists until there is a single element. It sorts those sublists 
and then it merges back and results in a sorted list. It has a time complexity of O(nlogn). 
The pro would be that it is quicker for larger lists because it doesnt have to go through the whole list. 
However the con is that it can be slower for smaller data sets.  

Insertion sort is a simple sorting algorithm that splits an array into a sorted and unsorted section. 
It compares each current element to its previous one.The unsorted parts are picked an placed in the correct 
position for the sorted part. It has a time complexity of O(n^2). A pro would be that if the input is almost 
sorted it can almost reach O(n). A con would be that the larger the input the slower it would go.   
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
  return arr.map(function (bool) {
    return !bool
  })
};
console.log(flipBool([true, false, true, true, false]))

//Bonus:
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
function bonus(animal, food) {
  if (animal.length >= 2 && food.length >= 2) {

  }
}

