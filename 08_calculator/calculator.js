const add = function (intA, intB) {
    return intA + intB;
};

const subtract = function (intA, intB) {
    return intA - intB;
};

const sum = function (intArray) {
    let total = 0;
    for (number of intArray) {
        total += number;
    }
    return total;
};

const multiply = function (intArray) {
    let total = 1;
    for (number of intArray) {
        total = total * number;
    }
    return total;
};

const power = function (intA, intB) {
    let total = intA;
    for (let i = 1; i < intB; ++i) {
        total = total * intA;
    }
    return total;
};

const factorial = function (intA) {
    let total = 1;
    for (let i = 1; i < intA; ++i) {
        total += total * i;
    }
    return total;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
