//user will give a range of numbers (num1 and num2)
// numbers will be input into a formula to find the sum of all the integers in the range
// if a bigger number is entered in the num1 slot, reverse the formula so negatives don't become an issue
// once the formula is done, return the sum

const sumAll = function(int1, int2) {
    if(!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";    
    if(int1 == '' || int2 == '' ||
       int1 < 0 || int2 < 0) {
       return 'ERROR';
    } else if(int1 < int2) {
        let sum = int2 * (int2 + 1)/2 - int1 * (int1 + 1)/2 + int1;
        return sum;
    } else if(int1 > int2){
        let sum = int1 * (int1 + 1)/2 - int2 * (int2 + 1)/2 + int2;
        return sum;
    } else {
        return 'ERROR';
    }
};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10 [90, 1]);

// Do not edit below this line
module.exports = sumAll;
