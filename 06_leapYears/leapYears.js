const leapYears = function(year) {

    //leap year only if centenary year and divisible by 400
    if ((year%100 === 0) && (year%400 === 0)){
        return true;
    }

    //if not centenery check is leap year by dividing by 4
    if ((year%100 !== 0)&&(year%4===0)){
        return true;
    }

    //all other years are not leap years so return false by default
    //unless other conditions are met
    return false;
    
};

// Do not edit below this line
module.exports = leapYears;
