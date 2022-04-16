// Ex2.5 - Summation
 
// Write a program that finds the summation of every number from 1 to num. The number will
// always be a positive integer greater than 0.
 
// For example:
// summation(2) -> 3
// 1 + 2
 
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


const summationOfNum = (num) => {
    const arr = new Array(num).fill(0);
    const integers = Array.from(arr, (value, index) => value + index + 1);
    console.log(integers);
    let summation = 0; 
    if (summation !== integers.length)
    {
        for (let i = 1; i <= integers.length; i++) summation += integers[i - 1];
    } return summation;
    
}
const summationOfNumTest = summationOfNum(8);
console.log(summationOfNumTest);