const express = require('express');
const app = express();

// route
app.get('/', function(req, res) {
    res.send("Welcome to the number generator!");
});

//  /fact/:num
app.get('/fact/:num', function(req, res) {
    const num = parseInt(req.params.num);
    const factorial = calculateFactorial(num);
    res.send(`Factorial of ${num} is ${factorial}`);
});

//  /multiply/:num
app.get('/multiply/:num', function(req, res) {
    const num = parseInt(req.params.num);
    const table = generateMultiplicationTable(num);
    res.send(`Multiplication table for ${num}:\n${table.join('\n')}`);
});

//  /fib/:num
app.get('/fib/:num', function(req, res) {
    const num = parseInt(req.params.num);
    const fibSequence = generateFibonacciSequence(num);
    res.send(`Fibonacci sequence up to ${num}:\n${fibSequence.join(', ')}`);
});

// /cumulative/:num
app.get('/cumulative/:num', function(req, res) {
    const num = parseInt(req.params.num);
    const cumulativeSum = calculateCumulativeSum(num);
    res.send(`Cumulative sum up to ${num}: ${cumulativeSum}`);
});

//  /string/:text
app.get('/string/:text', function(req, res) {
    const text = req.params.text;
    res.send(`You entered: ${text}`);
});

// factorial
function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }
}

// multiplication 
function generateMultiplicationTable(num) {
    const table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(`${num} x ${i} = ${num * i}`);
    }
    return table;
}

//  Fibonacci 
function generateFibonacciSequence(num) {
    const sequence = [0, 1];
    for (let i = 2; i <= num; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, num + 1);
}

// cumulative sum 
function calculateCumulativeSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}


const port = 6000;
app.listen(port, function() {
    console.log(`Server started at http://localhost:${port}`);
});



