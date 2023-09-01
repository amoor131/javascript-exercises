const removeFromArray = function (totalArray, ...removals) {
    let reducedArray = totalArray;
    for (let removal of removals) {
        if (reducedArray.includes(removal))
            reducedArray.splice(reducedArray.indexOf(removal), 1);
    }
    return reducedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
