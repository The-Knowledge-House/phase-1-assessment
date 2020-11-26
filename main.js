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
const brandOfCar = carBrands.filter(brand => {
  return brand.type === `sedan`;
})
console.log(brandOfCar);

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

  function reverseString(str) {
    let newS = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newS += str[i];
    }
    return newS;
}
console.log(reverseString('cat'));


// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array
let longArr = ["sailor", "solid", "pardons"];
function longer() {
  let longest = longArr.reduce((a, b) => (a.length >= b.length ? a : b));
  console.log(longest);
}
longer();

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
  const sumPrice = arr.reduce((acc, cur) => acc + cur.price, 0);
  return sumPrice;
  
}
console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.
recursion - 
"The repeated application of a recursive procedure"
// In javascript, a function can be recursive by calling itself in the own body 
// of the function. 
// A recursive function can look like :
function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
      countDown(nextNumber);
  }
}
countDown(3);

// this function is called countdown its taking an argument fromNumber,
// assigning the fromNumber - 1 to a variable called NextNumber,
// from there creating the if statment sets up for the recursion 
// so while nextNumber is greater than 0 call on the function it's self 
// so countDown will take the variable nextNumber as an argument and 
// begin to count down from fromNumber. 
// this function also holds a base case saying as long as nextNumber is greater than 
// 0 procced in excuting the recursive countdown function.

//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part
BUBBLE SORT ALGORITHM:
//what is bubble sort - 
// bubble sort, takes values of elements next to eachother 
//and compares the elements. once compared the elements then 
// swap positions, if the first value greater than second value.
//largest value makes it's way to the top of the array "bubbling up"
//bubble sort - 
// quadratic time complexity 
//performance is directly proportional to the squared size of
// the input data set.
// this time complexity will occur whenever its needed to nest over 
//multiple iterations within the data sets.

pros:
//Can be used for external sorting. if the array is almost sorted.
// 𝑂(𝑛2) O(n2)in worst case and average case.
Cons:
//amount of time it takes to sort 
QUICK SORT ALGORITHM:
// What is Quick Sort - 
  // Quick Sort Algorithm, divides elements in an array in to smaller parts
//then arranges the elements based on a condition.
// when given an array, choose a pivot element. From there,
// the pivot element is then compared to all the 
//elements around it, elements that are less than 
//are placed to the left of the pivot and elements 
// greater than are placed to the right. 
// How to write QUICK SORT- 
    //create first function, it will consist of three
    // arguments. create a temp variable it will hold 
    // the left index of the argument items. 
    // leftindex of items will equal to right index
    //of items. then rightindex of items will 
  // then equal to temp. Creating another 
  // function that takes three arguments 
  // items, left, right
  // create a pivot variable 
  // inside this second function two while loops 
  // that will take care of the sorting and swaping 
  // of elements, create the third and final function 
  //it will be calling the second function and checking the 
  // amount of elements on the right side and 
  // on the left side 
  // at the end is when you call the whole quick sort function 
PROS: 
  // average time complexity is O(n log(n))
  // the pros of using quick sort is that easy implementation, meaning 
  // if a array needs to be sorted and it has few number of elements. 
  // creating a quick sort function will be easy to process.
CONS:
// worst-case complexity of quick sort is O(n^2)
// The con of using quick sort is that its not stable, if the array provided that 
// needed to be sorted contained mass amounts of elements, quick sort would take long
// and wouldnt be able to have a great time complexity. 

/*  7
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
  return arr.map(function(bool) {return !bool})
};
console.log(flipBool);
//Bonus:
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
