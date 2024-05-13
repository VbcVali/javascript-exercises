const sumAll = function(num1, num2) {
    if (typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    }

    else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else if (num1 < num2) {
        let sum = 0;
        for (num1; num1 !== num2 + 1; num1++) {
            sum += num1;
        }
        return sum;
    }
    else if (num1 > num2) {
        let sum = 0;
        for (num2; num2 !== num1 + 1; num2++) {
            sum += num2;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
