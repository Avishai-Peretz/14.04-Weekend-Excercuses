// Ex5.7 - shortest words 
// Simple, given a string of words, return the length of the shortest word(s). 
// String will never be empty and you do not need to account for different data types.


const findShotestWord = sentence => {
    const shortest = sentence
        .split(' ')
        .reduce((longWord, shortWord) => longWord.length < shortWord.length ? longWord : shortWord
    );
    return shortest.length;

}
console.log(findShotestWord('avishai is working all day! :-('));