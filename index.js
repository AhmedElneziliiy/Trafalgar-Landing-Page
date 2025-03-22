// Method to add two numbers
function add(a, b) {
    return a + b;
}

// Method to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Method to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Method to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Method to find the maximum number in an array
function findMax(arr) {
    return Math.max(...arr);
}

// Method to find the minimum number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// Method to calculate the average of numbers in an array
function calculateAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

// Method to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Method to check if a string is a palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}