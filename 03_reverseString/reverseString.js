const reverseString = function(input) {
    //split the string into an array of its characters
    const chars = input.split("");
    //reverse the array in place
    const revChars = chars.reverse();
    //return the output as a string
    return revChars.join("");
};

// Do not edit below this line
module.exports = reverseString;
