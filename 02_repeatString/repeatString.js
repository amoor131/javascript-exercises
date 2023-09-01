const repeatString = function (phrase, repetitions) {
    if (typeof phrase !== "string" && phrase != "")
        throw new Error("Argument must be a string");
    if (typeof repetitions !== "number")
        throw new Error("Argument must be a number");
    if (repetitions < 0) return "ERROR";
    let repeatingString = "";
    for (let i = 0; i < repetitions; ++i) {
        repeatingString += phrase;
    }
    return repeatingString;
};

// Do not edit below this line
module.exports = repeatString;
