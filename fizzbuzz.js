/* Write a program that takes a user’s input and prints the numbers from one to the number the user entered. 
However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 
For numbers which are multiples of both three and five print FizzBuzz. */

// js problem solving exercise from The Odin Project

/* pseudocode:

- take user input as a number and store that number
- increment up to that number, printing out each number
- if the number to be printed is divisible by 3, print Fizz
- if the number to be printed is divisible by 5, print Buzz
- if the number to be printed is divisible by 3 AND 5, print FizzBuzz

*/

let getNumber = parseInt(prompt("Enter a number to print up to: "));

for (let i = 1; i <= getNumber; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}