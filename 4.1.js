// Ex4.1 - Fibonacci -
// “Write a function to return an n element in Fibonacci sequence” is one of the most common
// questions you can hear during the coding challenge interview part. In this blogpost I’m going to
// walk through the two of the most typical solutions for this problem and also cover a dreadful (for
// most of novice developers) topic of time complexity.
// So what is a Fibonacci sequence? According to ​Wikipedia​:
// “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence,
// called the Fibonacci sequence, and characterized by the fact that every number after the first
// two is the sum of the two preceding ones.”
// Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like
// this:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// or this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// note : desiredN can start with 0 !!!
const getFibonacci = (firstN, desiredN) => {  
    let desiredFibonaciiMiusTwo = firstN;
    let desiredFibonacii = 0;
    if (firstN === 0) {
        let desiredFibonaciiMiusOne = firstN + 1;
        if (desiredN === 1) { return desiredFibonacii = desiredFibonaciiMiusOne }
        if (desiredN === 0) { return desiredFibonacii = desiredFibonaciiMiusTwo }
        else {
            for (let i = 1; i < desiredN; i++) {
                desiredFibonaciiMiusTwo = desiredFibonaciiMiusOne;
                desiredFibonaciiMiusOne = desiredFibonacii;
                desiredFibonacii = desiredFibonaciiMiusTwo + desiredFibonaciiMiusOne;
            }
        }
        return desiredFibonacii;
    }
    else if (firstN === 1) {
        let desiredFibonaciiMiusOne = firstN;
        if (desiredN === 1) { return desiredFibonacii = desiredFibonaciiMiusOne }
        if (desiredN === 0) { return desiredFibonacii = desiredFibonaciiMiusTwo }
        else {
            for (let i = 0; i < desiredN; i++) {
                desiredFibonaciiMiusTwo = desiredFibonaciiMiusOne;
                desiredFibonaciiMiusOne = desiredFibonacii;
                desiredFibonacii = desiredFibonaciiMiusTwo + desiredFibonaciiMiusOne;
            }
        }
    }
    else {
        return `${firstN} Is invalid firstN`;
    }
    
    return desiredFibonacii;
}
console.log(getFibonacci(0, 5));
console.log(getFibonacci(1, 5));
console.log(getFibonacci(2, 5));