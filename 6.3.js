// Ex6.3 - organize strings

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the
// longest possible, containing distinct letters,
 
// each taken only once - coming from s1 or s2.
 
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
  
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


a = "xyaabbbccccdefww"
a1 = "abcdefghijklmnopqrstuvwxyz"
b = "xxxxyyyyabklmopq"

const repeatedLetters = (a, b) => {  
    const sortedArrey = a
        .concat(b)
        .toLowerCase()
        .split("")
        .sort(); 
    let filterdArrey = [];
    for (let i = 0; i < sortedArrey.length; i++)
    {
        !filterdArrey.includes(sortedArrey[i]) ? filterdArrey.push(sortedArrey[i]) : ""; 
    }    
    return filterdArrey.join("");
}
 
console.log(repeatedLetters(a,b));
console.log(repeatedLetters(a1,a1));