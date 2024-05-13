const removeFromArray = function(array, ...args) {
    let newArray = [];
    for (const item of array) {
        if (args.includes(item) !== true) {
            newArray.push(item);
        }
        else {
            continue;
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

