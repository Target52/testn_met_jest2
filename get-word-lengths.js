
const getWordLengths = function (someWords) {
    const newArray = [];
    someWords.forEach(function (item) {
        newArray.push(item.length);
    });
    return newArray
}

module.exports = getWordLengths;