const sumAll = function(lower, upper){

    let sum = 0;
    let temp;

    if (!Number.isInteger(lower) || !Number.isInteger(upper)) return "ERROR";
    if (lower < 0 || upper < 0) return "ERROR";

    if(lower>upper){
        let temp = lower;
        lower = upper;
        upper = temp;
    }

    for(let i = lower; i<=upper; i++){
            sum += i;
    }
    
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
