const removeFromArray = function(array, ...args) {

    //create empty output array
    let arrOutput = [];

    //check through every item in the input array
    //if the item does not match the arguments
    //then push it into the output array
    for (let item of array){
        if (!args.includes(item)){
            arrOutput.push(item);
        }
    }

    //return the output array which is now
    //filled with what we want
    return arrOutput;
      
};

// Do not edit below this line
module.exports = removeFromArray;
