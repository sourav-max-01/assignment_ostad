// 1. calculate the sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

// 2.check if a number is even
function isEven(num) {
  return num % 2 === 0;
}

// 3.find the maximum number in an array
function findMax(arr) {
  return Math.max(...arr);
}

// 4.reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 5.filter out odd numbers from an array
function filterOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

// 6.sum all elements in an array
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// 7.sort an array in ascending order
function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

// 8.function of capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(calculateSum(3, 4));  
console.log(isEven(4));           
console.log(findMax([1, 2, 3, 4, 5])); 
console.log(reverseString("hello"));  
console.log(filterOddNumbers([1, 2, 3, 4, 5])); 
console.log(sumArray([1, 2, 3, 4, 5]));  
console.log(sortArray([5, 3, 8, 1, 2]));  
console.log(capitalizeFirstLetter("hello")); 
