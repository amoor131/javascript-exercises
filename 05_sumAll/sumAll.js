const sumAll = function (rangeStart, rangeEnd) {
    if (
        typeof rangeStart !== "number" ||
        typeof rangeEnd !== "number" ||
        rangeStart < 0 ||
        rangeEnd < 0
    ) {
        return "ERROR";
    }
    if (rangeStart == rangeEnd) {
        return rangeStart;
    }
    let lowNumber = rangeStart;
    let highNumber = rangeEnd;
    let sum = 0;
    if (rangeStart > rangeEnd) {
        lowNumber = rangeEnd;
        highNumber = rangeStart;
    }
    for (let i = lowNumber; i <= highNumber; ++i) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
