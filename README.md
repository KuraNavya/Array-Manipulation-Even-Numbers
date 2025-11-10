Array Manipulation - Filter Even Numbers
Description
This is a simple JavaScript project that takes an array of numbers as input and displays only the even numbers. It demonstrates basic JavaScript concepts, such as arrays, filtering, DOM manipulation, and user input handling.
Step 1: filterEvenNumbers(arr) function
This function takes an array of numbers and returns only the even numbers as a string in array format.
Check if input is an array
if (!Array.isArray(arr)) return '[]';



Array.isArray(arr) checks whether the input is a valid array.


If it’s not an array, it immediately returns '[]' (an empty array as a string).


Example:
filterEvenNumbers('hello'); // returns '[]'

Filter only even numbers
const evenNumbers = arr.filter(num => num % 2 === 0);



.filter() loops through each element of the array.


num % 2 === 0 checks if a number is even (% is the modulo operator).


Returns a new array containing only the even numbers.


Example:
arr = [1, 2, 3, 4, 5]
evenNumbers = arr.filter(num => num % 2 === 0) // [2, 4]

Convert array to string for display
return `[${evenNumbers.join(', ')}]`;



.join(', ') converts the array [2,4] into a string '2, 4'.


Square brackets [ and ] are added manually to make it look like an array.



Step 2: handleFilter() function
This function is triggered when a button is clicked. It:


Takes input from the user.


Converts it into an array of numbers.


Calls the filter function.


Displays the result.


Get input from the user
const input = document.getElementById('arrayInput').value;



.value gets the text typed by the user.


Example:
User types: 1, 2, 3, 4, 5
input = "1, 2, 3, 4, 5"

Convert input string to an array of numbers
const arr = input.split(',').map(num => Number(num.trim()));



.split(',') converts the string into an array of strings.


.trim() removes extra spaces.


Number() converts strings to numeric values.


Result:
arr = [1, 2, 3, 4, 5]

Call filterEvenNumbers()
const result = filterEvenNumbers(arr);



Returns a string of even numbers like "[2, 4]".


Display result
document.getElementById('result').textContent = result;



Updates the page with the filtered array.



Step 3: Internal flow with sample numbers
Input:
7, 10, 15, 22

Execution flow:


input = "7, 10, 15, 22"


Convert to array: [7, 10, 15, 22]


Filter even numbers: [10, 22]


Convert to string: "[10, 22]"


Display on webpage → [10, 22]



Key Concepts for Beginners


Array Methods: .filter() loops through an array and returns elements that satisfy a condition.


Modulo Operator %: Finds the remainder of division; used to check even/odd numbers.


String Manipulation: .split(), .trim(), .join().


DOM Manipulation: document.getElementById(), .value, .textContent.


Type Conversion: Number() converts strings to numbers.


