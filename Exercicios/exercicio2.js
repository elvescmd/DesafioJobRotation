const readlineInterface = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getFibonacciSequence(limit) {
    const fibonacciSequence = [0, 1];
    while (fibonacciSequence[fibonacciSequence.length - 1] < limit) {
        fibonacciSequence.push(fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2]);
    }
    return fibonacciSequence;
}

function isNumberInFibonacciSequence(number, fibonacciSequence) {
    return fibonacciSequence.includes(parseInt(number));
}

function printFibonacciSequence(number, fibonacciSequence) {
    console.log(`${number} pertence à sequência de Fibonacci: ${fibonacciSequence.join(', ')}`);
}

function printNumberNotInFibonacciSequence(number) {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}

readlineInterface.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (number) => {
    const fibonacciSequence = getFibonacciSequence(number);
    if (isNumberInFibonacciSequence(number, fibonacciSequence)) {
        printFibonacciSequence(number, fibonacciSequence);
    } else {
        printNumberNotInFibonacciSequence(number);
    }
    readlineInterface.close();
});
