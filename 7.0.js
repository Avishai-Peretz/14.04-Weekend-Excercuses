const filter = (array, callback) => {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        const value = array[i];
        const index = i;
        const weWantToPush = callback(value, index);
        if (weWantToPush) {
            newArray.push(value);
        } else {
            continue;
        }
    }
    return newArray;
};

const forEach = (array, callback) => {
    for (let i = 0; i < array.length; i += 1) {
        const value = array[i];
        const index = i;
        callback(value, index);
    }
};
    
const map = (array, callback) => {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        const value = array[i];
        const index = i;
        newArray.push(callback(value, index));
    }
    return newArray;
};