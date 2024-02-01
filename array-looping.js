// practice task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ["red", "blue", "green", "yellow", "orange"];
// console.log(colors);

let reverseArray = [];
for (let color of colors) {
  reverseArray.unshift(color);
}
// console.log(reverseArray);

// practice task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
// console.log(numbers)

let evenNumber = [];
for (let number of numbers) {
  if (number % 2 === 0) {
    evenNumber.push(number);
  }
}
// console.log(evenNumber)

// practice task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

const numbers1 = ["Tom", "Tim", "Tin", "Tik"];

let numStr ="";
for (num of numbers1) {
  const output = num;
  numStr+= output;
  
}
console.log(numStr)

// practice task 4
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person';
console.log(statement)

let reverse_str = statement.split(" ");
let reverseArray1 = reverse_str.reverse() ;
const result = reverseArray1.join(" ");
console.log(result)