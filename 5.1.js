// Ex5.1 - trimming string
// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.

const trimmedSentence = (sentece) => {
    let newSentence = sentece.slice(1, sentece.length - 1) 
    return newSentence
}
console.log(trimmedSentence("Aavishai PeretzZ"));