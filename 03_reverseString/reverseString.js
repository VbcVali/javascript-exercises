const reverseString = function(s) {
    let splitString = s.split("");
    let reverseArray = splitString.reverse();
    return reverseArray.join("");

};

// Do not edit below this line
module.exports = reverseString;
