const fibonacci = function (iteration) {
    if (typeof iteration === "string") {
        iteration = parseInt(iteration);
    }
    if (iteration < 0) return "OOPS";

    if (iteration == 0) return 0;
    if (iteration == 1) return 1;
    if (iteration == 2) return 1;

    let prev = 1;
    let current = 1;
    let temp = 0;
    for (i = 2; i < iteration; ++i) {
        temp = prev + current;
        prev = current;
        current = temp;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
