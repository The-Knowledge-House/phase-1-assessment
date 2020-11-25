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

const carBrands = users.filter(user => {
  return user.role === 'sedan';
})
  console.log(carBrands);


/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
function reverse(s){
  return s.split("").reverse().join("");
}


// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

let anArray = [1,2,3,4,5,6];
const longStr = (i => {
	let newArr = arr.map(i => {
		i toString();
		})
	}
	return newArr;

longStr([1,2,3,4,5,6]);




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
  let sum = newArray.reduce(add, 0);
}
  console.log(shop(wishlist));





// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

'Recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result. Most loops can be rewritten in a recursive style, and in some functional languages this approach to looping is the default.'

'Example'

function result = add_numbers(a, b, c) 
 
          if ( nargin() == 2 ) 
            result = a + b; 
          else if ( nargin() == 3 ) 
            result = add_numbers(a + b, c); 
          else 
            error('oops'); 
          end 
           
        end 
            
          



//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part

'A. QUICK SORT: It divides elements into smaller parts based on some condition and performing the sort operations on those divided smaller parts. 

'Example'
let items = [5,3,7,6,2,9];
console.log(items.sort());

prints [2, 3, 5, 6, 7, 9]

'How does QuickSort Work'
'1. First find the "pivot" element in the array.'
'2. Start the left pointer at first element of the array.'
'3. Start the right pointer at last element of the array.'
'4. Compare the element pointing with left pointer and if it is less than the pivot element, then move the left pointer to the right (add 1 to the left index). Continue this until left side element is greater than or equal to the pivot element.'
'5. Compare the element pointing with right pointer and if it is greater than the pivot element, then move the right pointer to the left (subtract 1 to the right index). Continue this until right side element is less than or equal to the pivot element.'
'6. Check if left pointer is less than or equal to right pointer, then saw the elements in locations of these pointers.'
'7. Increment the left pointer and decrement the right pointer.'
'If index of left pointer is still less than the index of the right pointer, then repeat the process; else return the index of the left pointer.'

'B. BUBBLE SORT: "Bubble sort, also known as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.'

'Example'

function bubble_Sort(arr){

  var len = arr.length,
      i, j, stop;

  for (i=0; i < len; i++){
      for (j=0, stop=len-i; j < stop; j++){
          if (arr[j] > arr[j+1]){
              swap(arr, j, j+1);
          }
      }
  }

  return arr;
}
console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));

'Bubble sort'
'1. Look at the first number in the list.'
'2. The current number with the next number.'
'3. Is the next number smaller than the current number?' ...
'4. Move to the next number along in the list and make this the current number.'
'5. Repeat from step 2 until the last number in the list has been reached.'

'PRO: Bubble sort usually works faster than more complex algorithms. The reason is, for each iteration, simple algorithms does less calculation than complex algorithms.'
'For example, bubble sort takes 3ms per iteration while quicksort takes 20ms.' 

'CON: The main disadvantage of the bubble sort method is the time it requires. With a running time of O(n^2), it is highly inefficient for large data sets.'

'The CON of Quick Sort is has the worst-case efficiency of the quick sort is o(n²) when the list is sorted and left most element is chosen as the pivot. As long as the pivot point is chosen randomly, the quick sort has an algorithmic complexity of O(n log(n)). If the partitioning is balanced, the algorithm runs asymptotically as fast as merge.'

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
  function inverted(bools) {
    for(let i = 0; i < bools.length; i++) {
       bools[i] = !bools[i];
     }
    return bools;
  }



//Bonus:
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
