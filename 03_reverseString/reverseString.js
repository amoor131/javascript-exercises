const reverseString = function (forwardString) {
    let backwardString = "";
    for (letter in forwardString) {
        backwardString = forwardString[letter] + backwardString;
    }
    return backwardString;
};

// Do not edit below this line
module.exports = reverseString;
