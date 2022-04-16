// Ex2.4 - Unique
 
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

const array = [ 1, 1, 1, 1, 1, 2 ];
console.log(array.length);
const unique = (array) => {
    for (let i = 1; i < array.length -1 ; i++)
    {
        if ((array[i] === array[i - 1]) && (array[i] === array[i + 1])) continue;
        if ((array[i] !== array[i - 1]) && (array[i] === array[i + 1])) return array[i - 1];
        else if ((array[i] === array[i - 1]) && (array[i] !== array[i + 1])) return array[i + 1];
        else return array[i];
    }
    
};
const testUnique = unique(array);
console.log(testUnique);