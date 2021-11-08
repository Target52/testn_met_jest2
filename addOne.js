const addOne = function (numbers) {
    const newArray = [];
    numbers.forEach(function (item) {
        newArray.push(item + 1);
    });
    return newArray
}



module.exports = addOne;