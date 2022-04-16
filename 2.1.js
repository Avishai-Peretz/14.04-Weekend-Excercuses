// Ex2.1 - Sum of lowest numbers 
// Create a function that returns the sum of the two lowest positive numbers given an array of 
// minimum 4 positive integers. No floats or non-positive integers will be passed. 
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. 
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
const testArray = [4,1,4,11,2,,77,23];
const SumOfLowestNumbers = (arrayOfPositives) => {

    let num1 = arrayOfPositives[0]
    let num2 = arrayOfPositives[1]
    if (num1 > num2) {
        const lowest = num2;
        num2 = num1
        num1 = lowest
    }
    for (let i = 2; i < arrayOfPositives.length; i++ ) {
        if (arrayOfPositives[i] < num1) {
            num2 = num1  
            num1 = arrayOfPositives[i]
        } else if ( arrayOfPositives[i] < num2 ) {
           num2 = arrayOfPositives[i] 
        }
    }
    return num1 + num2
}
console.log(SumOfLowestNumbers(testArray));
