// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
 
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
 
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// const toCamelCase = (sentence) => {
//     newSentence = sentence.split();
//     return newSentence;
//  }
//  console.log(toCamelCase("The_Stealth_Warrior"));

let camelize = (sentence) => {
    let regular = /[^a-zA-Z0-9](.)/g
    return sentence.toLowerCase().replace(regular, (p,char) => char.toUpperCase());
}
console.log(camelize("the-stealth-warrior") );