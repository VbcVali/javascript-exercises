const repeatString = function(s, num) {
    if (num >= 0) {
        let string = "";
        for (let i = 0; i < num; i++) {
        string = string + s;
        }
        return string;
    }

    else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
