// Ex2.7 - Basic Math
 
// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7)         // Output: 11


// Note!!! Value1 is in left side and value2 is in the right side (for power operator);
const basicMath = (operation, value1, value2) => {
    const operators = {
        '+': function(x, y) {
            return x + y;
        },
        '-': function(x, y) {
            return x - y;
        },
        '*': function(x, y) {
            return x * y;
        },
        '/': function(x, y) {
            return x / y;
        },
        '**': function(x, y) {
            return x ** y;
        },  
    };
    return operators[operation] ? operators[operation](value1, value2) : `"${operation}"  Is not an operetor`;
    
}

const basicMathTest = basicMath('*', 2, 3);
console.log(basicMathTest);