// Define basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    // Check if dividing by zero
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function increment(n) {
    return n + 1;
}

function decrement(n) {
    return n - 1;
}

// Define functions for parsing and preserving decimals
function makeInt(n) {
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    return parseFloat(n);
}

// Export the functions if needed
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal,
};
