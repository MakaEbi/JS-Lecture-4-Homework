// Task 1: Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'

function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}

// Example usage:
console.log(alphabeticalOrder('webmaster')); // Output: 'abeemrstw'

alphabeticalOrder (Maka);

console.log(alphabeticalOrder ('Maka')); // aamk

// Task 2: Write a JavaScript function that generates a string ID of specified length of random characters.

function generateRandomID(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

generateRandomID(8);
0.357 X 62 = 19.34
19

x6i

// Example usage:
console.log(generateRandomID(8)); // Output: A random string of 8 characters

// Task 3: Write a JavaScript function that checks whether a number is perfect.
// A perfect number is a positive integer that is equal to the sum of its proper divisors excluding itself.

function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

// Example usage:
console.log(isPerfectNumber(-6)); // Output: true (6 is a perfect number)
console.log(isPerfectNumber(47)); // Output: true (28 is a perfect number)
console.log("Name");

<!-- Task 4: Here is a sample HTML file with a submit button. Modify the style of the submit button using JavaScript. -->

Modify the button's background color, font size, and padding using JavaScript

function styledText() {
  document.getElementById("text").style.backgroundColor = "lightblue";
  document.getElementById("text").style.color = "red";
}

Task 5: Write a JavaScript program to remove items from a drop-down list.

function removeOption() {
  let dropDown = document.getElementById("colorSelect");
  let selectedIndex = dropDown.selectedIndex;
  if (selectedIndex !== -1) {
    dropDown.options[selectedIndex].remove();
  } else {
    alert("Please select an item to remove");
  }
}
