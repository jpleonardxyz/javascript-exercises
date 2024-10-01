const sumAll = function(num1, num2) {
    //dealing with fail states
    //negatives, decimals, non-numbers
    if ((num1 < 0) || (num2 < 0)){
      return "ERROR";
    } 

    if ((num1 !== Math.floor(num1)) || (num2 !== Math.floor(num2))) {
      return "ERROR";
    }

    //creat sum variable
    let sum = 0;

    //dealing with case where numbers are in the wrong order
    // I could write a second loop the runs in reverse but
    //it is easier to adjust the counters and use one loop
    
    //create variable for upper and lower
    let intUpper = 0;
    let intLower = 0;

    if (num1 > num2){
        intUpper = num1;
        inLower = num2;
    }
    else{
        intUpper = num2;
        intLower = num1;
    }

    //loop from lower to upper and add the numbers
    for (let i = intLower; i<= intUpper; i++){
        sum+=i;
    }

    //return the sum
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
